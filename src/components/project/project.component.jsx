import "./project.styles.scss";
import React from 'react';
import {useSelector} from "react-redux";
import Contact from "../contact/contact.component";
import Title from "../title/title.component";
import { useRouteMatch } from "react-router";

const ProjectPage = () => {

    const projectTitle = useRouteMatch().params.project;
    const categoryTitle = useRouteMatch().params.category;

    const calligraphyData = useSelector(state => state.categoriesReducer.calligraphyData);
    const alcoholData = useSelector(state => state.categoriesReducer.alcoholData);
    const musicData = useSelector(state => state.categoriesReducer.musicData);
    const othersData = useSelector(state => state.categoriesReducer.othersData);
    
    function dataType(){
        if(categoryTitle === "calligraphy"){
            return calligraphyData;
        }
        else if(categoryTitle === "design"){
            const allDATA = alcoholData.concat(musicData, othersData);
            return allDATA;
        }
    }

    const selectedProject = dataType().find(p => p.title === projectTitle);
    const id = selectedProject.id;
    const imgz = selectedProject.firstImages;

        return(
            <div className="project" key={id}>
                {/* <h1 className="projectTitle">{projectTitle}</h1> */}
                <Title title={projectTitle}/>
                <div className="show">
                <img className="showImage" 

                src={imgz[0]} alt="project" />
                <div className="text">
                <p className="info">{selectedProject.info1}</p>
                </div>
                <div className="text">
                <p className="info">{selectedProject.info2}</p>
                </div>
                <img  className="showImage" src={imgz[1]} alt="project" />
                
                </div>
                
                <div className="projectImages">
                {
                selectedProject.images.map((img, i) => (
                    <div>
                    <img className="images" key={i} src={img} alt="project" />
                    </div>
                ))    
                }           
                </div>
                <Contact />
            </div>
        )
    }

    


export default ProjectPage;

