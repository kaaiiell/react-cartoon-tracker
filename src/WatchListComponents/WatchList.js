import React, {useState,useEffect, useContext} from 'react'
import '../cardComponents/Cards.css';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import ListMiddleMan from './ListMiddleMan.js'

import {AuthContext} from '../context/auth';

function Cards(props){
    const context = useContext(AuthContext);
    const [anime,setData] = useState(null);


    const [error,setError] = useState(null);

    const {loading,data} = useQuery(FETCH_POSTS_QUERY);
    //const {loading,dataP: {getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY);


    const url = `https://api.jikan.moe/v3/anime/40028`;
    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then(setData);
    },[url]);

    console.log(anime);
    console.log(data);


    if(context.user){
        console.log("username inside WatchList:",context.user.username);
    }
    if(context.user&&data){        
        return(
            <div style={{backgroundColor:"black",alignItems:"center"}}>
                <div style={{borderStyle:"solid",width:"50%",backgroundColor:"#222222",
                borderRadius:"5px",marginBottom:"20px",borderColor:"#545452",marginLeft:"25rem"}}>
                    <h1 style={{color:"white"}}>Watch List</h1>
                </div>
            <div className="flex-container">

            {loading?
                <h1>LOAADING</h1>:
                <>

                    
                {Object.keys(data.getPosts).length>0 &&
                <>
                    {context.user? 
                    data.getPosts.filter((p)=>p.username===context.user.username).map((entry)=>(
                        <>
                            {/* <WatchListShow data={anime}/> */}
                            {/* <p key={entry.id}>{entry.username}: {entry.body} {entry.id}</p>
                            <RemoveFromWatch postId={entry.id}></RemoveFromWatch> */}
                            <ListMiddleMan postId={entry.id} mal_id={entry.body}></ListMiddleMan>
                        </>
                    ))
                    :
                    <div></div>
                    }
                    </>
                    }


                </>
            }
            </div>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts{
            id 
            body 
            createdAt 
            username 
        }
    }
    
`;

export default Cards


