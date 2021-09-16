import React from "react";
import "./title.styles.scss";



const Title = ({title}) => {

    return(
            <div className="titleContainer">
            <div className="titleBackground"/>
            <div className="thetitle">
            <h1>{title}</h1>
            </div>
            
        </div>
    )
}

export default Title;