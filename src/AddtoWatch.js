import React, {useState} from 'react'
//import { useNavigate } from "react-router-dom";
import gql from 'graphql-tag';
import {useMutation} from '@apollo/client';
import {useForm }from './util/hooks';
import { useNavigate } from "react-router-dom";

function AddtoWatch(props) {

    const[errors,setErrors] = useState({});
    const [values,setFormval] = useState({
        body: `${props.id}`,
    });
    

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("mal_id",values);
        createPost();
      }
    const [createPost,{error}] = useMutation(CREATE_POST_MUTATION,{
        variables: values,
        update(proxy,result){
            console.log("resss",result);

            const data = proxy.readQuery({
                 query: FETCH_POSTS_QUERY,
            })
            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data: {
                  getPosts: [result.data.createPost, ...data.getPosts],
                },
              });
              
            values.body = "";
        },onError(err){
            console.log(err.graphQLErrors[0]);
            setErrors(err.graphQLErrors[0]);
            alert(err.graphQLErrors[0].message);
          }
    });
  


    return (
        <div className="postinfodiv" style ={{width:"80px", display:"inline",
        position: "absolute",
        right: "35px",
        bottom: "10px",}}>
            <button onClick={onSubmit} type="submit" className="btn btn-primary">Add to List</button>
        </div>
    )
}

const CREATE_POST_MUTATION = gql`
    mutation createPost($body: String!){
        createPost(body: $body){
            id
            body 
            createdAt
            username
        }
    }
`;

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


export default AddtoWatch;
