import React from "react";
import CalligraphyCard from "../calligraphyCard/callipgraphyCard.component";
import {useSelector} from "react-redux";
import "./calligraphy.styles.scss";
import Title from "../title/title.component";
import Contact from "../contact/contact.component";

const Calligraphy = () => {

    const calligraphyData = useSelector(state => state.categoriesReducer.calligraphyData);

    return(

        <div className="calligraphy">
            <Title title={"Calligraphy"} />
            <div className="calligraphyContainer">
            {   
                calligraphyData.map(({id, title, background}) => (
                    <CalligraphyCard 
                    key={id}
                    title={title}
                    background={background}
                    />
                ))
            }   
            </div>
            <Contact />
        </div>

    )
}

export default Calligraphy;