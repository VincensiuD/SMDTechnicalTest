import React from "react";
import "./switch.css";

export function Header(props){

    const totalFollowers = props.totalFollowers

    return(
        <div style={header}>
            <div>
                <h1>Social Media Dashboard</h1>
                <p>Total followers: {totalFollowers}</p>
            </div>
            <div>
                <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                />
                <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
                >
                <span className={`react-switch-button`} />
                </label>
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