import {React} from "react";
import { imageGenerator } from "./ImageGenerator";

export function OverviewCard(props){

const title = props.title;
const number= props.number;
const icon = props.icon;
const increment = props.increment;
const incrementInt = parseInt(increment);
const incrementAbsoluteValue = Math.abs(incrementInt);
const bgColour = props.bgColour;
const txtColour1 = props.txtColour1;
const txtColour2 = props.txtColour2;
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

//

    return (
        <div style={{
            minWidth: 260,
            padding: 10,
            margin: 5,
            textAlign:'center',
            backgroundColor:bgColour,
            flexBasis: "20%",
            justifyContent: "space-between",
            maxWidth: 25,
            }}>
            <div style={style.comp}>
                <p style={{color:txtColour1}}>
                  {title}
                </p>
                <img src={imageGenerator(icon)} alt="social media icon"/>
            </div>
            <div style={style.comp}>
                <div style={{color: txtColour2}}>
                    {number}
                </div>
                <div style={style.comp}>
                    <img src={imageGenerator(triangle)} alt="up or down"/>
                    <p style={{color: redOrGreen}}>
                        {incrementAbsoluteValue}%
                    </p>
                </div>
            </div>
           

        </div>
    );
}

const style={
    comp:{
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
           
    },
      cards:{
        minWidth: 200,
        padding: 10,
        margin: 5,
        textAlign:'center',
        
    },
}

