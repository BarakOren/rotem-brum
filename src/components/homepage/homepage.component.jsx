import React, {useEffect} from "react";
import "./homepage.styles.scss";
import rotemBrum from "../../assests/forsite_RotemnatuiSVG.svg";
import calligraphySpinner from "../../assests/forsite_calli-circleSVG.svg";
import designSpinner from "../../assests/forsite_design-circleSVG.svg";
import shopSpinner from "../../assests/forsite_shop-circleSVG.svg";
import { CSSTransition } from 'react-transition-group';
import { useHistory } from "react-router";
import {useSelector, useDispatch} from "react-redux";

import { homeFalse, homeTrue } from "../../redux/pages/pages.actions";

const Homepage = () => {

    const dispatch = useDispatch();
    const homePage = useSelector(state => state.pagesReducer.homepage);

    useEffect(() => {
        dispatch(homeTrue())
      }, [])

      const history = useHistory();

      function goTo(location){
          dispatch(homeFalse())
          setTimeout(function(){
            history.push(location)
          }, 1000)
      }


    return(
        <div className="homepage">
                
                <img src={rotemBrum} alt="title" className="title" />
                   
         
            <CSSTransition  
            unmountOnExit 
            in={homePage} 
            timeout={1000} 
            classNames="spinnerAnimation">

            <div className="spinnersContainer">  

                <div className="spinning three running" onClick={() => goTo("/calligraphy")} style={{backgroundImage: `url(${calligraphySpinner})`}} />
                 
                <div className="spinning two running" onClick={() => goTo("/design")} style={{backgroundImage: `url(${designSpinner})`}} />

                <div className="spinning one running" onClick={() => goTo("/shop")} style={{backgroundImage: `url(${shopSpinner})`}} />
                
            </div>
            </CSSTransition>
                {/* <button onClick={() => setHome(!homePage)}>sdg</button> */}
        
        </div>
    )
}







export default Homepage;

