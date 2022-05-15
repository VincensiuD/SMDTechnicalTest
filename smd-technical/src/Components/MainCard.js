import {React} from "react";
import { imageGenerator } from "./ImageGenerator";

export function MainCard(props){

const fansAmount= props.amount;
const fansType = props.type;
const fansIncrement = props.increment;
const icon = props.icon;
const username = props.username;
const incrementInt = parseInt(fansIncrement);
const incrementAbsoluteValue = Math.abs(incrementInt);
let triangle;
let redOrGreen;
    if(incrementInt>0){
        triangle = "up";
        redOrGreen = "green"
    }
    else if(incrementInt<0){
        triangle = "down";
        redOrGreen="red"
    }


    return (
        <div style={style.cards}>
            <div style={{display: "flex", alignItems: "center",
           justifyContent:"center"}}>
                <img src={imageGenerator(icon)} alt="icon"/>
                <p>{username}</p>
            </div>
         
          <p style={style.bigNum} >{fansAmount}</p>
          <p >{fansType}</p>
          <div style={{display: "flex",
          alignItems: "center",
          color:redOrGreen,
           justifyContent:"center"}}>
              <img src={imageGenerator(triangle)} alt="up or down"/>
              <p>{incrementAbsoluteValue} TODAY</p>
          </div>
          
         </div>
    );
}


const style = {
    cards:{
        backgroundColor: "hsl(228, 28%, 20%)",
        minWidth: 200,
        padding: 10,
        margin: 5,
        textAlign:'center',
        color:'white',
        
    },
    bigNum:{
        fontSize: 50,
        fontWeight: 'bold',
    }
}