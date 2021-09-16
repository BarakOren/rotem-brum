import React from "react";
import DesignCard from "../designCard/designCard.component";
import {useSelector} from "react-redux";
import "./design.styles.scss";
import Contact from "../contact/contact.component";
import Title from "../title/title.component";

const Design = () => {

    const alcoholData = useSelector(state => state.categoriesReducer.alcoholData);
    const musicData = useSelector(state => state.categoriesReducer.musicData);
    const othersData = useSelector(state => state.categoriesReducer.othersData);

    
    return(
        <div className="design">
            
            {/* <img className="backgroundImg1" src={Tester} />
            <img className="backgroundImg2" src={Tester} /> */}
            <Title title={"Design"} />


            <div className="verticalContainer">

                <div className="vertical">
                <h1 className="subTitle">alcohol</h1>
                {
                    alcoholData.map(({id, title, background}) => (
                        <DesignCard  id={id} title={title} background={background}/>
                    ))
                }
                </div>
                <div className="vertical">
                <h1 className="subTitle">music</h1>
                {
                    musicData.map(({id, title, background}) => (
                        <DesignCard id={id} title={title} background={background}/>
                    ))
                }
                </div>
            </div>
            <h1 className="subTitle">others</h1>
            <div className="horizontalContainer">
            {
                    othersData.map(({id, title, background}) => (
                        <DesignCard margin={true} id={id} title={title} background={background}/>
                    ))
                }
            </div>
            <Contact />
        </div>
    )
}

export default Design;