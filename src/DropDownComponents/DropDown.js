import React, {useState} from 'react';
import Cards from '../cardComponents/Cards.js';
import './DropDown.css';
import './ThisWeek.css';

function DropDown(props) {
    const[value,setValue] = useState(props.year);
    const[season,setSeason] = useState("winter");
    const[org,setOrg] = useState("title");
    const[isDone,setisDone] = useState(false);
    const[pvalue,psetValue] = useState(2021);
    const[pseason,psetSeason] = useState("winter");
    const[porg,psetOrg] = useState("popularity");

    const handleSubmit = (event) =>{
        setisDone(true);
        //alert('Year: ' + value+' season: '+season+' sortby: '+org);
        psetValue(value);
        psetSeason(season);
        psetOrg(org);
        event.preventDefault();
    }
    const handleChange = (event) =>{
        //alert('Setting value: ' + event.target.value);
        setValue(event.target.value);
        setisDone(false);
        //x = event.target.value;
    };
    const handleChangeSeason = (event) =>{
        //alert('Setting season: ' + event.target.value);
        setSeason(event.target.value);
        setisDone(false);
        //y = event.target.value;
    };
    const handleChangeOrg = (event) =>{
        //alert('Setting sortby: ' + event.target.value);
        setOrg(event.target.value);
        setisDone(false);
        //z = event.target.value;
    };
    const returnDay = (d) =>{
        if(d==='0'){
            return "Sunday";
        }
        if(d==='1'){
            return "Monday";
        }
        if(d==='2'){
            return "Tuesday";
        }
        if(d==='3'){
            return "Wednesday";
        }
        if(d==='4'){
            return "Thursday";
        }
        if(d==='5'){
            return "Friday";
        }
        if(d==='6'){
            return "Saturday";
        }
        else{
            return "This Season";
        }

    };

    function getDayNum(){
        let today = new Date();
        let daynum = today.getDay();
        let strindayNum = `${daynum}`;
        return strindayNum;
    }
    const [dayNum,setDayNum] = useState('10');
    const handleClick = (event) =>{
        if(event.target.id==='7'){
            //console.log(event.target.id);
            setDayNum(getDayNum());
        }
        else{
            setDayNum(event.target.id);
        }
        //console.log(event.target.innerHTML);
    }


    const dates = [];
    for(let i = 2021;i>(2021-11);i--){
        dates.push(i);
    }
    return (
        <>
        {/* <ThisWeek></ThisWeek> */}
        <div className = "dropDown">

        <div className="dayWrap">
            <h1 className="airingHeader" style={{color:"white"}} id = "thedate">Shows Airing {returnDay(dayNum)}</h1>
            <div className="buttonWrap" id="AllB">
                <button className ="btn btn-secondary btn-sm" id={10} onClick={handleClick}>All</button>
            </div>
            <div className="buttonWrap" id="TodayB">
                <button className ="btn btn-secondary btn-sm" id={7} onClick={handleClick}>Today</button>
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


            <form className="formdropdown "onSubmit={handleSubmit}>
                <label style={{color:"white"}}>
                Filter:
                <select value={value} onChange={handleChange} style={{
                    borderRadius:"5px",marginRgiht:"5px",marginLeft:"5px",backgroundColor:"#545452",color:"white",
                    }}>
                    {
                    dates.map((date)=>{
                        return(
                            <option value={date} key={date}>{date}</option>
                        );
                    })
                    }
                </select>
                <select value={season} onChange={handleChangeSeason} style={{
                    borderRadius:"5px",marginRgiht:"5px",marginLeft:"5px",backgroundColor:"#545452",color:"white",
                    }}>
                    <option value="summer">summer</option>
                    <option value="winter">winter</option>
                    <option value="fall">fall</option>
                    <option value="spring">spring</option>
                </select>
                <select value={org} onChange={handleChangeOrg} style={{
                    borderRadius:"5px",marginRgiht:"5px",marginLeft:"5px",backgroundColor:"#545452",color:"white",
                    }}>
                    <option value="popularity">popularity</option>
                    <option value="rating">rating</option>
                    <option value="members">members</option>
                    <option value="title">title</option>
                </select>
                </label>
                <input type="submit" value="Submit" style={{
                    borderRadius:"5px",marginRgiht:"5px",marginLeft:"5px",backgroundColor:"#545452",color:"white",
                    }}/>
            </form>
        </div>
            {
            isDone?<Cards 
                year={value} 
                season={season} 
                org={org} 
                isDone ={isDone} 
                getDay={dayNum}/>:

            <Cards 
                year={pvalue} 
                season={pseason} 
                org={porg} 
                isDone ={isDone} 
                getDay={dayNum}/>
            }
        {/* {isDone?<ThisWeek year={value} season={season} org={org} isDone ={isDone}/>:
        <ThisWeek year={pvalue} season={pseason} org={porg} isDone ={isDone}/>} */}
        </>
    );
}

export default DropDown;