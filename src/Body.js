import React from 'react';
import Forms from './Forms.js';
import DropDown from './DropDown.js';

function Body(props){
    return(
        <div className = "mainBody" style={{
            backgroundColor:"black",
        }}>
            <DropDown day={true}></DropDown>
            <Forms></Forms>
            {/* <ThisWeek></ThisWeek> */}
        </div>
    );
}

export default Body;