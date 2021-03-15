import React, {useContext,useState} from 'react';
import './Forms.css';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../context/auth';

function FormTest(){
  const context = useContext(AuthContext);
    const history = useNavigate();
    const[errors,setErrors] = useState({});
    const [formval,setFormval] = useState({
      username:"",
      email:"",
      password:"",
      confirmPassword:""
    });

    const handleChange = (event) => {
      setFormval({...formval,[event.target.name]: event.target.value
      });
    }
    const [addUser,{ loading }] = useMutation(REGISTER_USER,{
      update(_,result){
        console.log(result);
        context.login(result.data.register);
        history("/");
      },
      onError(err){
        console.log(err.graphQLErrors[0].extensions.exception.errors);
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: formval
    });

    const handleSubmit = (event) => {
      //alert('duur essay was submitted: ' + formval);
      console.log("submit",event.target.value);
      console.log("username",formval.username);
      console.log("email",formval.email);
      console.log("password",formval.password);
      console.log("confirm",formval.confirmPassword);
      event.preventDefault();
      addUser();
      // props.history.push("/");
      //history.push('/');

    }


    return(
        <div className ="logininfo">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input name="username" onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="userName" placeholder="Enter Username"></input>
          <small id="emailHelp" className="form-text text-muted">Enter Username.</small>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input name="email" onChange={handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" onChange={handleChange} type="password" className="form-control" id="password" placeholder="Enter Passwordd"></input>
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input name="confirmPassword" onChange={handleChange} type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"></input>
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

  const REGISTER_USER = gql`
    mutation register(
       $username: String!,
       $email: String!,
       $password: String!,
       $confirmPassword: String!
    ){
    register(
      registerInput:{
        username: $username,
        email: $email,
        password: $password,
        confirmPassword: $confirmPassword
      }
    ){
      id email username createdAt token
    }
  }
  `;

  export default FormTest;
