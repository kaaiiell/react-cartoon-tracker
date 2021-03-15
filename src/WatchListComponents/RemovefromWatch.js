import React, {useState} from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/client';
import { useNavigate } from "react-router-dom";


function RemovefromWatch({postId}) {
    const navigate = useNavigate();
    const[yousure,setYousure] = useState(false);
    const[errors,setErrors] = useState({});
    const[deletePost] = useMutation(DELETE_POST_MUTATION,{
        update(proxy){
            setYousure(false);

            navigate(0);

        },onError(err){
            console.log(err.graphQLErrors[0]);
            //console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0]);
            alert(err.graphQLErrors[0].message);
          },
        variables:{
            postId
        }
    });

    function submitHandler(){
        console.log(postId);
        deletePost();
    }
    return (
        <button onClick={submitHandler}className="btn btn-primary">Delete</button>
    )
}

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId: ID!){
        deletePost(postId: $postId)
    }
`;

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

export default RemovefromWatch
