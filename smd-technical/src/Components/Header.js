import React from "react";
import { useState } from "react";
import "./switch.css";

export function Header(props){

    const totalFollowers = props.totalFollowers

    const [darkMode,setDarkMode] = useState(true)

    function themeMode(){

        if(darkMode){
        setDarkMode(false);
        }
        else if(!darkMode){
        setDarkMode(true);
        }
    }

    return(
        <div style={header}>
            <div>
                <h1>Social Media Dashboard</h1>
                <p>Total followers: {totalFollowers}</p>
                <p>{darkMode.toString()}</p>
            </div>
            <div>
                <div>                              
                <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                onChange={themeMode}
                />
                <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
                >
                <span className={`react-switch-button`} />
                </label>
                </div>
            </div>
        </div>
      
    );
}

const header = {
    justifyContent: "space-between",
    paddingLeft: 50,
    display: "flex",
    color:"white"
    
}