import { React, useState, useEffect } from "react";
import { imageGenerator } from "./ImageGenerator";
import { incrementColour,incrementIcon } from "./incrementFunctions";

export function MainCard(props) {
  const fansAmount = props.amount;
  const fansType = props.type;
  const fansIncrement = props.increment;
  const icon = props.icon;
  const username = props.username;
  const incrementInt = parseInt(fansIncrement);
  const incrementAbsoluteValue = Math.abs(incrementInt);
  const txtColour1 = props.txtColour1;
  const txtColour2 = props.txtColour2;
  let darkMode = localStorage.getItem("Mode")
  let cardBgColour = defaultBgColour();
  let triangle = incrementIcon(incrementInt);
  let borderColour;
function defaultBgColour(){
  if(darkMode === "Dark"){
    return "hsl(228, 28%, 20%)";
 }
 else {
     return "hsl(227, 47%, 96%)";
 }
  }
  //let[cardBgColour,setCardBgColour] = useState("")
 //setCardBgColour(defaultBg)

  function highlight(){
    if(darkMode === "Dark"){
      cardBgColour=("hsl(228, 28%, 40%)");
    }
    else{
       cardBgColour=("hsl(227, 47%, 86%)");
    }
  }
  function reset(){
    if(darkMode === "Dark"){
        cardBgColour=("hsl(228, 28%, 20%)");
      }
      else{
          cardBgColour=("hsl(227, 47%, 96%)");
      }
    
  }


  switch (icon) {
    case 'yt':
      borderColour = "hsl(348, 97%, 39%)";
      break;
    case 'insta':
        borderColour = "linearGradient(hsl(37, 97%, 70%),hsl(329, 70%, 58%))";
       //borderColour= "linear-gradient(to right,#e66465, #9198e5)"
        break;
    case 'twt':
        borderColour= "hsl(203, 89%, 53%)";
      break;
    case 'fb':
        borderColour = "hsl(208, 92%, 53%)";
        break;
    default:
      console.log("Error");
  }

  return (
    <div className="individual-card"
      style={{
        minWidth: 260,
        padding: 10,
        margin: 5,
        textAlign: "center",
        backgroundColor: cardBgColour,
        borderTopWidth: 3,
        borderTopStyle: "solid",
        borderTopColor: borderColour,
      }}
      onMouseEnter={highlight}
      onMouseLeave={reset}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxHeight:30
        }}
      >
        <img src={imageGenerator(icon)} alt="icon" />
        <p style={{ color: txtColour1, maxHeight:15,}}>{username}</p>
      </div>
      <p style={{fontWeight: "bold", color: txtColour2, maxHeight:15, fontSize:40, textAlign:"center",}}>
        {fansAmount}
      </p>
      <p style={{ color: txtColour1 }}>{fansType}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: incrementColour(incrementInt),
          justifyContent: "center",
        }}
      >
        <img src={imageGenerator(triangle)} alt="up or down" />
        <p>{incrementAbsoluteValue} TODAY</p>
      </div>
    </div>
  );
}

const style = {
  cards: {
    minWidth: 200,
    padding: 10,
    margin: 5,
    textAlign: "center",
    color: "green",
  },
  bigNum: {
    fontSize: 50,
    fontWeight: "bold",
  },
};

const mystyle={
    background: 'linear-gradient(to right, #430089, #82ffa1)'
  }