import React, {useState,useEffect} from 'react'
import './Cards.css';
import Saturday from './Saturday.js';
import Friday from './Friday.js';
import Thursday from './Thursday.js';
import Wednesday from './Wednesday.js';
import Tuesday from './Tuesday.js';
import Monday from './Monday.js';
import Sunday from './Sunday.js';
import AllShows from './AllShows';
import Spinner from 'react-bootstrap/Spinner';

function Cards(props){
    const [data,setData] = useState(null);
    // const [error,setError] = useState(null);
    const url = `https://api.jikan.moe/v3/season/${props.year}/${props.season}`;
    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then(setData);
    },[url]);

    //console.log(data);
    const listData = {};

    function getDayNum(iso){
      let today = new Date(iso);
      let daynum = today.getDay();
      return daynum;
  }
    if(data&&props.getDay==='0'){
        let sortedAnime=data.anime;
        const sunday = [];
            sortedAnime.forEach((anime) => {
            if(getDayNum(anime.airing_start)===0&&(anime.r18===false)){
                sunday.push(anime);
            }
            });
        if(props.org==="title"){
            sunday.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else if(props.org==="popularity"){
            sunday.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else if(props.org==="members"){
            sunday.sort((a, b) => (a.members > b.members) ? -1 : 1);
        }
        else if(props.org==="rating"){
            sunday.sort((a, b) => (a.score > b.score) ? -1 : 1);
        }
        return(
            <Sunday data ={sunday}/>
        )
    }
    if(data&&props.getDay==='1'){
        let sortedAnime=data.anime;
        const sunday = [];
            sortedAnime.forEach((anime) => {
            if(getDayNum(anime.airing_start)===1&&(anime.r18===false)){
                sunday.push(anime);
            }
            });
        if(props.org==="title"){
            sunday.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else if(props.org==="popularity"){
            sunday.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else if(props.org==="members"){
            sunday.sort((a, b) => (a.members > b.members) ? -1 : 1);
        }
        else if(props.org==="rating"){
            sunday.sort((a, b) => (a.score > b.score) ? -1 : 1);
        }
        return(
            <Monday data ={sunday}/>
        )
    }
    if(data&&props.getDay==='2'){
        let sortedAnime=data.anime;
        const sunday = [];
            sortedAnime.forEach((anime) => {
            if(getDayNum(anime.airing_start)===2&&(anime.r18===false)){
                sunday.push(anime);
            }
            });
        if(props.org==="title"){
            sunday.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else if(props.org==="popularity"){
            sunday.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else if(props.org==="members"){
            sunday.sort((a, b) => (a.members > b.members) ? -1 : 1);
        }
        else if(props.org==="rating"){
            sunday.sort((a, b) => (a.score > b.score) ? -1 : 1);
        }
        return(
            <Tuesday data ={sunday}/>
        )
    }
    if(data&&props.getDay==='3'){
        let sortedAnime=data.anime;
        const sunday = [];
            sortedAnime.forEach((anime) => {
            if(getDayNum(anime.airing_start)===3&&(anime.r18===false)){
                sunday.push(anime);
            }
            });
        if(props.org==="title"){
            sunday.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else if(props.org==="popularity"){
            sunday.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else if(props.org==="members"){
            sunday.sort((a, b) => (a.members > b.members) ? -1 : 1);
        }
        else if(props.org==="rating"){
            sunday.sort((a, b) => (a.score > b.score) ? -1 : 1);
        }
        return(
            <Wednesday data ={sunday}/>
        )
    }
    if(data&&props.getDay==='4'){
        let sortedAnime=data.anime;
        const sunday = [];
            sortedAnime.forEach((anime) => {
            if(getDayNum(anime.airing_start)===4&&(anime.r18===false)){
                sunday.push(anime);
            }
            });
        if(props.org==="title"){
            sunday.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else if(props.org==="popularity"){
            sunday.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else if(props.org==="members"){
            sunday.sort((a, b) => (a.members > b.members) ? -1 : 1);
        }
        else if(props.org==="rating"){
            sunday.sort((a, b) => (a.score > b.score) ? -1 : 1);
        }
        return(
            <Thursday data ={sunday}/>
        )
    }
    if(data&&props.getDay==='5'){
        let sortedAnime=data.anime;
        const sunday = [];
            sortedAnime.forEach((anime) => {
            if(getDayNum(anime.airing_start)===5&&(anime.r18===false)){
                sunday.push(anime);
            }
            });
        if(props.org==="title"){
            sunday.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else if(props.org==="popularity"){
            sunday.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else if(props.org==="members"){
            sunday.sort((a, b) => (a.members > b.members) ? -1 : 1);
        }
        else if(props.org==="rating"){
            sunday.sort((a, b) => (a.score > b.score) ? -1 : 1);
        }
        return(
            <Friday data ={sunday}/>
        )
    }
    if(data&&props.getDay==='6'){
        let sortedAnime=data.anime;
        const sunday = [];
            sortedAnime.forEach((anime) => {
            if(getDayNum(anime.airing_start)===6&&(anime.r18===false)){
                sunday.push(anime);
            }
            });
        if(props.org==="title"){
            sunday.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else if(props.org==="popularity"){
            sunday.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else if(props.org==="members"){
            sunday.sort((a, b) => (a.members > b.members) ? -1 : 1);
        }
        else if(props.org==="rating"){
            sunday.sort((a, b) => (a.score > b.score) ? -1 : 1);
        }
        return(
            <Saturday data ={sunday}/>
        )
    }
    else if(data&&data.anime.length>0&&props.getDay==='10'){
        let sortedAnime=data.anime;
        const sunday = [];
            sortedAnime.forEach((anime) => {
            if(anime.r18===false){
                sunday.push(anime);
            }
            });
        if(props.org==="title"){
            sunday.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        else if(props.org==="popularity"){
            sunday.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else if(props.org==="members"){
            sunday.sort((a, b) => (a.members > b.members) ? -1 : 1);
        }
        else if(props.org==="rating"){
            sunday.sort((a, b) => (a.score > b.score) ? -1 : 1);
        }
        return(
            <>
            <Spinner animation="border" variant="light" />
            <AllShows data ={sunday}  list={false} listData={listData}/>
            </>
        )
    }
    else if(data){
        return(
            <div style={{
                textAlign:"center",
                width: "50%",
                margin: "auto",
                marginBottom:"20px",
                color: "white",
                }}>
                    <h1>No Info Yet. Come back later!</h1>
                </div>
        );
    }
    else{
        return(
            <div style={{
            textAlign:"center",
            width: "50%",
            margin: "auto",
            marginBottom:"20px",
            color: "white",
            }}>
                <h1>Loading.....
                <Spinner animation="grow" variant="light"/>
                </h1>
            </div>
    );
    }
}

export default Cards


