import React, {useState,useEffect} from 'react'
import './Cards.css';
import Countdown from './Countdown.js';

function Cards(props){
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const url = `https://api.jikan.moe/v3/season/${props.year}/${props.season}`;
    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then(setData)
        .catch(setError);
    },[url]);

    //console.log(data.anime);
    // console.log("year:",props.year);
    // console.log("season:",props.season);
    // console.log("sort:",props.org);
    // console.log("isDone:",props.isDone);
    console.log(data);

    // if(data&&data.anime.length>0){
    //     let animeList = data.anime;
    //     return (
    //       <div className="CardsContainerTest"
    //       style={{
    //           backgroundColor: "#222222",
    //       }}>
    //         <h1 style={{color:"white"}}>Showing Shows in {props.year} during {props.season} season</h1>
    //         {animeList.map((anime)=>{
    //           return(
    //             <div className = "CardsTest" key={anime.mal_id}
    //             style = {{
    //                 backgroundColor:"#545452",
    //             }}>
    //               <img className ="CardImgTest"src = {anime.image_url} alt = {anime.title}/>
    //               <p className = "cardTextTest">{anime.title}</p>
    //               <p className = "cardTextTest">{anime.mal_id}</p>
    //               {anime.genres.map((genres)=>{
    //                   return(
    //                     <div key = {genres.mal_id} >
    //                       <p className = "cardTextTest">{genres.name}</p>
    //                     </div>
    //                   );
    //               })}
    //               <button className="btn btn-primary" style = {{
    //                 position:"relative",
    //                 //left: "-10px",
    //                 //top: "230px",
    //               }}>more info</button>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     );
    // }
    // else if(data&&data.anime.length<=0){
    //     return(
    //         <div style={{
    //             textAlign:"center",
    //             width: "50%",
    //             margin: "auto",
    //             marginBottom:"20px",
    //         }}>
    //             No data on anime for the year {props.year} with season selection: {props.season}
    //         </div>
    //     );
    // }
    // else{
    //     return(
    //         <div style={{
    //             textAlign:"center",
    //             width: "50%",
    //             margin: "auto",
    //             marginBottom:"20px",
    //         }}>
    //             <h1>Loading.....</h1>
    //         </div>
    //     );
    // }
    if(data&&data.anime.length>0){
      let animeList = data.anime;
      return(
      <div className = "flex-container">
        {animeList.map((anime)=>{
        return(
        <div key={anime.mal_id} className="card border-dark mb-3" style={{width: "20rem",}}>
          <img className="card-img-top cbimage" src={anime.image_url}  alt=""></img>
          <div className="card-body">
            <h5 className="card-title cbtext">{anime.title}</h5>

            <input type="hidden" id={anime.title} value="{{anime[i]['iso']}}"></input>
            <img style={{display: "none",}} src="" alt =""></img>
            {/* <small className = "cbtext" id={anime.title}>Live Countdown Component</small> */}
            <Countdown startDate = {anime.airing_start} continuing = {anime.continuing} episodes={anime.episodes}></Countdown>
            <small className = "cbtext">Starts: {anime.airing_start}</small>
            <small className = "cbtext">Score: {anime.score}</small>
            <br></br>
            <small className = "cbtext">Members: {anime.members}</small>
            <br></br>
            <small className = "cbtext">Genre:    
            {anime.genres.map((genre)=>{
              return(
                <p className="genres" key={genre.name}> {genre.name}, </p>
              );
            })}
            </small>
            <p className="card-text cbtext">{anime.synopsis}</p>
            <a href="#home" className="btn btn-primary"
            style= {{
              display:"inline",
              position: "absolute",
              left: "10px",
              bottom: "10px",
              }} >More Info</a>
            <a href="#home" className="btn btn-primary"
            style={{
              display:"inline",
              position: "absolute",
              right: "10px",
              bottom: "10px",
              }}>MAL</a>
          </div>
        </div> 
        ); 
      })}  
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
        }}>
          <h1>Loading.....</h1>
        </div>
    );
}
}

export default Cards


