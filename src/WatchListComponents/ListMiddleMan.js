import React,{useState,useEffect} from 'react';
import '../cardComponents/Cards.css';
import WatchListShow from './WatchListShow.js';

function ListMiddleMan(props) {

    const [anime,setData] = useState(null);

    const url = `https://api.jikan.moe/v3/anime/${props.mal_id}`;
    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then(setData);
    },[url]);

    console.log(anime);
    if(anime){
    return (
        <>
        <WatchListShow postId={props.postId} data={anime}></WatchListShow>
        </>
    )
    }else{
        return(
            <h1>Loading....</h1>
        );
    }
}

export default ListMiddleMan
