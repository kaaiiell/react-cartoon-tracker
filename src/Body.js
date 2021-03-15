import React, {useContext} from 'react';
import DropDown from './DropDownComponents/DropDown.js';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

import {AuthContext} from './context/auth';
//import RemoveFromWatch from './WatchListComponents/RemovefromWatch.js';

function Body(props){

    const context = useContext(AuthContext);
    const {loading,data} = useQuery(FETCH_POSTS_QUERY);
    //const {loading,data: {getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY);
    
    if(data){
        console.log(data);
    }
    if(context.user){
    console.log("Body context:",context.user.username);
    }

    return(
        <div className = "mainBody" style={{
            backgroundColor:"black",
        }}>
            <h1 style={{
                display:"block",
                marginBottom:"auto",
                color:"black",
                }}>..</h1>
            {/* {context.user && (

            )} */}
            {/* {loading?
            <h1>LOAADING</h1>:
            <h1>
                {Object.keys(data.getPosts).length>0 &&

                <div>
                    {context.user? 
                    data.getPosts.filter((p)=>p.username==='1').map((entry)=>(
                        <div key={entry.id}>
                            <p key={entry.id}>{entry.username}: {entry.body} {entry.id}</p>
                            <RemoveFromWatch postId={entry.id}></RemoveFromWatch>
                        </div>
                    ))
                    :
                    <div></div>
                    }
                </div>
                }


            </h1>
            } */}
            <DropDown day={true}></DropDown>
            {/* <Forms></Forms> */}
            {/* <ThisWeek></ThisWeek> */}
        </div>
    );
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts{
            id 
            body 
            createdAt 
            username 
            likeCount
        }
    }
    
`;

export default Body;