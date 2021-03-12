import React, {useState} from 'react';
import Cards from './Cards.js';

function DropDown(prop) {
    const[value,setValue] = useState(2021);
    const[season,setSeason] = useState("winter");
    const[org,setOrg] = useState("title");
    const[isDone,setisDone] = useState(false);
    const[pvalue,psetValue] = useState(2021);
    const[pseason,psetSeason] = useState("winter");
    const[porg,psetOrg] = useState("title");

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
    const dates = [];
    for(let i = 2021;i>(2021-11);i--){
        dates.push(i);
    }

    return (
        <>
        <div style={{
            textAlign:"center",
            width: "50%",
            margin: "auto",
            marginBottom:"20px",
            borderStyle: "solid",
        }}>
            <form onSubmit={handleSubmit}>
                <label>
                Filter:
                <select value={value} onChange={handleChange}>
                    {
                    dates.map((date)=>{
                        return(
                            <option value={date}>{date}</option>
                        );
                    })
                    }
                </select>
                <select value={season} onChange={handleChangeSeason}>
                    <option value="summer">summer</option>
                    <option value="winter">winter</option>
                    <option value="fall">fall</option>
                    <option value="spring">spring</option>
                </select>
                <select value={org} onChange={handleChangeOrg}>
                    <option value="popularity">popularity</option>
                    <option value="rating">rating</option>
                    <option value="members">members</option>
                    <option value="title">title</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        {isDone?<Cards year={value} season={season} org={org} isDone ={isDone}/>:
        <Cards year={pvalue} season={pseason} org={porg} isDone ={isDone}/>}
        </>
    );
}

export default DropDown;