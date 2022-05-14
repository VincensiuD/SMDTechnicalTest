import React from "react";


export function Header(props){

    const totalFollowers = props.totalFollowers

    return(
        <div style={header}>
              <header>
                <h1>Social Media Dashboard</h1>
                <p>{totalFollowers}</p>
            </header>
        </div>
      
    );
}

const header = {
    justifyContent: "start",
    
}