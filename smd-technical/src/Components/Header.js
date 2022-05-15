import React from "react";
import "./switch.css";

export function Header(props){

    const totalFollowers = props.totalFollowers;
    const themeChanger = props.themeFunction;
    let textColour1 = props.txtColour1;
    let textColour2 = props.txtColour2;


    return(
        <div style={styles.header}>
            <div>
                <h1 style={{color:textColour2}}>Social Media Dashboard</h1>
                <p style={{color:textColour1}}>Total followers: {totalFollowers}</p>
                
            </div>
            <div>
                <div>                              
                <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                onChange={themeChanger}
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

let styles = {
    header: {
    justifyContent: "space-between",
    paddingLeft: 50,
    display: "flex",    
},
    text:{
        color: "pink"
    }
}