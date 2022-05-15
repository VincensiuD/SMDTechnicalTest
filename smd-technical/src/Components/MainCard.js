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
const txtColour1 = props.txtColour1;
const txtColour2 = props.txtColour2;
let cardBgColour = props.bgColour;
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
        <div style={{minWidth:190,padding: 10,margin: 5,textAlign:'center',backgroundColor: cardBgColour}}>
            <div style={{display: "flex", alignItems: "center",
           justifyContent:"center"}}>
                <img src={imageGenerator(icon)} alt="icon"/>
                <p style={{color:txtColour1}}>{username}</p>
            </div>
         
          <p style={{fontSize:50,fontWeight:"bold",color:txtColour2}} >{fansAmount}</p>
          <p style={{color:txtColour1}}>{fansType}</p>
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
        minWidth: 200,
        padding: 10,
        margin: 5,
        textAlign:'center',
        color:'green',
        
    },
    bigNum:{
        fontSize: 50,
        fontWeight: 'bold',
    }
}