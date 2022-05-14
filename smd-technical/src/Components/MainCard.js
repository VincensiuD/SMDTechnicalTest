import {React} from "react";
import { imageGenerator } from "./ImageGenerator";

export function MainCard(props){

const fansAmount= props.amount
const fansType = props.type
const fansIncrement = props.increment
const icon = props.icon

    return (
        <div style={style.cards}>
          <img src={imageGenerator(icon)} alt="icon"/>
          <p style={style.bigNum} >{fansAmount}</p>
          <p >{fansType}</p>
          <p>{fansIncrement}</p>
         </div>
    );
}


const style = {
    cards:{
        backgroundColor: "blue",
        minWidth: 200,
        padding: 10,
        margin: 5
    },
    bigNum:{
        fontSize: 44,
    }
}