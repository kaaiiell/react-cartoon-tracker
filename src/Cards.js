import React, {useState,useEffect}from 'react'

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
    console.log("year:",props.year);
    console.log("season:",props.season);
    console.log("sort:",props.org);
    console.log("isDone:",props.isDone);
    console.log(data);

    if(data&&data.anime.length>0){
        let animeList = data.anime;
        return (
          <div className="CardsContainerTest"
          style={{
              backgroundColor: "#222222",
          }}>
            {animeList.map((anime)=>{
              return(
                <div className = "CardsTest" key={anime.mal_id}
                style = {{
                    backgroundColor:"#545452",
                }}>
                  <img className ="CardImgTest"src = {anime.image_url} alt = {anime.title}/>
                  <p className = "cardTextTest">{anime.title}</p>
                  <p className = "cardTextTest">{anime.mal_id}</p>
                  {anime.genres.map((genres)=>{
                      return(
                        <div key = {genres.mal_id} >
                          <p className = "cardTextTest">{genres.name}</p>
                        </div>
                      );
                  })}
                  <button className="btn btn-primary" style = {{
                    position:"relative",
                    //left: "-10px",
                    //top: "230px",
                  }}>more info</button>
                </div>
              );
            })}
          </div>
        );
    }
    else if(data&&data.anime.length<=0){
        return(
            <div style={{
                textAlign:"center",
                width: "50%",
                margin: "auto",
                marginBottom:"20px",
            }}>
                No data on anime for the year {props.year} with season selection: {props.season}
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
