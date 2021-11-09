import React from "react";
import "./menu.styles.scss";
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import {useSelector, useDispatch} from "react-redux";
import {toggleMenu} from "../../redux/menu/menu.actions";
import { useLocation, useHistory } from "react-router";
import {homeTrue, homeFalse} from "../../redux/pages/pages.actions";
import { closeMenu } from "../../redux/menu/menu.actions";

const Menu = () => {
        
        const dispatch = useDispatch();
        const menuState = useSelector(state => state.menuReducer.toggle); 
        
        const location = useLocation().pathname;
        const history = useHistory();
        const color = ("/" + location.split("/")[1]);
    
        function goTo(url){
            window.scrollTo({top: 0, behavior: 'smooth'});
            dispatch(closeMenu());
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

    var toggler = menuState ? "" : "hidden";
    var burgerColor = menuState ? 900 : 100;

    return(
        <div>
            <MenuIcon className="hamburger" style={{ fontSize: 40, color: grey[burgerColor] }} onClick={() => dispatch(toggleMenu())}/>

            <div className={`menu ${toggler}`}>
                <div className="itemContainer">
                    <p style={{textDecorationLine: color === "/" ? "underline" : ""}} onClick={() => goTo("/")} className="menuItem">Home</p>
                    <p style={{textDecorationLine: color === "/calligraphy" ? "underline" : ""}} onClick={() => goTo("/calligraphy")} className="menuItem">Calligraphy</p>
                    <p style={{textDecorationLine: color === "/design" ? "underline" : ""}} onClick={() => goTo("/design")}className="menuItem">Design</p>
                    <p style={{textDecorationLine: color === "/shop" ? "underline" : ""}} onClick={() => goTo("/shop")} className="menuItem">Shop</p>
                    <p style={{textDecorationLine: color === "/about" ? "underline" : ""}} onClick={() => goTo("/about")} className="menuItem">About/Contact</p>            
            </div>
        </div>
        </div>
    )
}

export default Menu;