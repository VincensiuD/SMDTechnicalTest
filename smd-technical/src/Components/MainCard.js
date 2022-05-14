import {React, useState} from "react";


export function mainCard(props){

const fansAmount= props.amount
const fansType = props.type
const fansIncrement = props.increment
const icon = props.imageLink

    return (
        <div  >
        <image alt="icon"/>
        <p >{fansAmount}</p>
        <p >{fansType}</p>
        <br/>
        <p>{fansIncrement}</p>
    </div>
    );
}