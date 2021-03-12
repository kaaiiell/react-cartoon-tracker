import React from 'react';
import Cards from './Cards.js';
import Forms from './Forms.js';
import DropDown from './DropDown.js';

function Body(props){
    return(
        <div className = "mainBody">
            <Forms></Forms>
            <DropDown></DropDown>
        </div>
    );
}

export default Body;