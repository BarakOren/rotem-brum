import React from "react";
import "./header.styles.scss";
import {useDispatch } from "react-redux";
import { homeTrue, homeFalse } from "../../redux/pages/pages.actions";
import rotemBrum from "../../assests/forsite_RotemnatuiSVG.svg";
import { useLocation, useHistory } from "react-router";


const Header = () => {

    const dispatch = useDispatch();

    const location = useLocation().pathname;
    const history = useHistory();
    const color = ("/" + location.split("/")[1]);
    
    function goTo(url){
        if(location === "/" && url === "/"){
        } else if(url === "/") {
            dispatch(homeTrue())
            history.push(url);
        } else if(location === "/"){
            dispatch(homeFalse())
            setTimeout(function(){
                history.push(url)
            }, 1000)
        } else {
            history.push(url);
        }
    }

    return(
        <div className="header">
            <div className="rtmbrmcontainer">
                <img className="rtmbrm" onClick={() => goTo("/")} src={rotemBrum} alt="rotembrum" />
            </div>
            <div className="restItems">
            <p style={{color: color === "/" ? "white" : ""}} onClick={() => goTo("/")} className="headerItem">Home</p>
            <p style={{color: color === "/calligraphy" ? "white" : ""}} onClick={() => goTo("/calligraphy")}  className="headerItem">Calligraphy</p>
            <p style={{color: color === "/design" ? "white" : ""}} onClick={() => goTo("/design")} className="headerItem">Design</p>
            <p style={{color: color === "/shop" ? "white" : ""}} onClick={() => goTo("/shop")} className="headerItem">Shop</p>
            <p style={{color: color === "/about" ? "white" : ""}} onClick={() => goTo("/about")} className="headerItem">About/Contact</p>            
            </div>
        </div>
    )
}

export default Header;