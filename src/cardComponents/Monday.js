import React from 'react';
import './Cards.css';
import Countdown from '../Countdown.js';

function Monday(props){
    let animeList = props.data;

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
                <br></br>
                <small className = "cbtext">Starts: {anime.airing_start}</small>
                <br></br>
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
export default Monday;