import React from 'react';
import Body from './Body.js';
import Header from './Header.js';
import Forms from './LoginRegister/Forms.js';
import Login from './LoginRegister/Login.js';
import WatchList from './WatchListComponents/WatchList.js';

export function Home(props){
    return(
        <div>
            <Header/>
            <Body auth={props.auth}/>
            <div style={{backgroundColor:"black"}}>
            <WatchList/>
            </div>
        </div>
    )
}
export function Log(){
    return(
        <div>
            <Header/>
            <Login></Login>
        </div>
    )
}
export function Contact(){
    return(
        <div>
            Contact
        </div>
    )
}
export function Register(){
    return(
        <div>
            <Header/>
            <Forms></Forms>
        </div>
    )
}