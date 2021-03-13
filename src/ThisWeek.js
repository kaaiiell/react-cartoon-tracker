import React,{useState,useEffect} from 'react';
import Cards from './Cards.js';
import './ThisWeek.css';

function ThisWeek({year,season,org,isDone}){
    const getDay = true;
    const url = `https://api.jikan.moe/v3/schedule/Saturday`;
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(setData)
            .catch(setError);
        },[url]);
    if(data){
        console.log(data.saturday[0].airing_start);
        let iso = data.saturday[0].airing_start
        let day = new Date(iso);
        console.log(day.getDay())
    };

    function getDayNum(){
        let today = new Date();
        let daynum = today.getDay();
        return daynum;
    }
    const [dayNum,setDayNum] = useState(getDayNum());
    const handleClick = (event) =>{
        alert('button pressed '+event.target.id);
        setDayNum(event.target.id);
        console.log(event.target.innerHTML);
    }
    console.log("todays numb is:",dayNum);
    console.log("today year:",season)
    return(
        <>
        <div className="dayWrap">
            <h1 style={{color:"white"}} id = "thedate">Shows Airing</h1>
            <div className="buttonWrap" id="TodayB">
                <button className ="btn btn-secondary btn-sm" id={-1} onClick={handleClick}>Today</button>
            </div>
            <div className="buttonWrap" id="SundayB">
                <button className ="btn btn-secondary btn-sm" id ={0} onClick={handleClick}>Sunday</button>
            </div>
            <div className="buttonWrap" id="MondayB">
            <button className ="btn btn-secondary btn-sm" id ={1} onClick={handleClick}>Monday</button>
            </div>
            <div className="buttonWrap" id="TuesdayB">
                <button className ="btn btn-secondary btn-sm" id ={2} onClick={handleClick}>Tuesday</button>
            </div>
            <div className="buttonWrap" id="WednesdayB">
                <button className ="btn btn-secondary btn-sm" id ={3} onClick={handleClick}>Wendesday</button>
            </div>
            <div className="buttonWrap" id="ThursdayB">
                <button className ="btn btn-secondary btn-sm" id ={4} onClick={handleClick}>Thursday</button>
            </div>
            <div className="buttonWrap" id="FridayB">
                <button className ="btn btn-secondary btn-sm" id ={5} onClick={handleClick}>Friday</button>
            </div>
            <div className="buttonWrap" id="SaturdayB">
                <button className ="btn btn-secondary btn-sm" id ={6} onClick={handleClick}>Saturday</button>
            </div>
        </div>
        {/* <Cards year={year} season={season} org={org} isDone ={isDone} getDay={true}/> */}
        </>
    );
}
export default ThisWeek;