import React from "react";
import "./designCard.styles.scss";
import { useHistory } from "react-router";

const DesignCard = ({id, title, background, margin}) => {
    var marginstylez = margin ? "1% 1%" : "3% 0%";
    console.log(id);
    const history = useHistory();

    function goToProject(){
        history.push(`/design/${title}`)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    return(
        <div
        className="designCard"
        style={{margin: marginstylez}}
        key={id}
        onClick={() => goToProject(title)}
        >
            <div className="background-image" style={{
            backgroundImage: `url(${background})`
        }} />
            <div className="designContent">
                    <h1 className='card-title'>{title}</h1>
            </div>
        </div>
    )
}

export default DesignCard;