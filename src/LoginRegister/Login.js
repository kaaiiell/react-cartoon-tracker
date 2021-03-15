import React, {useContext,useState} from 'react';
import './Forms.css';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../context/auth';

function Login(){
    const context = useContext(AuthContext);
    const history = useNavigate();
    const[errors,setErrors] = useState({});
    const [formval,setFormval] = useState({
      username:"",
      password:""
    });

    const handleChange = (event) => {
      setFormval({...formval,[event.target.name]: event.target.value
      });
    }
    const [addUser,{ loading }] = useMutation(LOGIN_USER,{
      update(_,result){
        console.log(result);
        context.login(result.data.login);
        history("/");
      },
      onError(err){
        //console.log(err);
        console.log(err.graphQLErrors[0].extensions.exception.errors);
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: formval
    });

    const handleSubmit = (event) => {
      //alert('duur essay was submitted: ' + formval);
      console.log("submit",event.target.value);
      console.log("username",formval.username);
      console.log("password",formval.password);
      event.preventDefault();
     addUser();
    }


    return(
        <div className ="logininfo">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input name="username" onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="userName" placeholder="Enter Username"></input>
          <small id="emailHelp" className="form-text text-muted">Enter Username.</small>
        
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" onChange={handleChange} type="password" className="form-control" id="password" placeholder="Enter Passwordd"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {Object.keys(errors).length>0 &&
      <div className ="Errors" style={{textAlign:"left"}}>
        <ul>
        {Object.values(errors).map((e)=>(
          <li key={e}>{e}</li>
        ))}
        </ul>
      </div>}
      </div>

    );
}

  const LOGIN_USER = gql`
    mutation login(
       $username: String!,
       $password: String!
    ){
    login(
        username: $username,
        password: $password
    ){
      id email username createdAt token
    }
  }
  `;

  export default Login;
