import React from "react";
import "./calligraphyCard.styles.scss";

import { useHistory } from "react-router";

const CalligraphyCard = ({id, title, background, margin}) => {
    var marginstylez = margin ? "1% 1%" : "3% 0%";

   
    const history = useHistory(); 

    function goToProject(){
        history.push(`/calligraphy/${title}`)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    return(
        <div
        className="calligraphyCard"
        style={{margin: marginstylez}}
        key={id}
        onClick={() => goToProject()}
        >
            <div className="background-image" style={{
            backgroundImage: `url(${background})`
        }} />
            <div className="calligraphyContent">
                    <h1 className='calligraphy-title'>{title}</h1>
            </div>
        </div>
    )
}

export default CalligraphyCard;