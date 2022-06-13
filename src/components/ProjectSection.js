import React from "react";
//import {swiper} from 'swiper/react';
import SectionTitle from './components/SectionTitle';
import Projects from "./components/Projects";
import ProjectItem from "./components/Projectitem";

function ProjectsSection() {
    return (
        <div>
            <div className="container">
                <SectionTitle heading = "Projects" subheading="Some of our recent projects " />
                <div className="projects__allitems">
                    <swiper>
                      {Projects.map((project,index) =>{
                          if(index >= 5) return;
                          return <ProjectItem />
                      })}
                    </swiper>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;