import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
         {projects.map((ele,index)=>{
           return <ProjectItem key={index} name={ele.name} technologies={ele.technologies} about={ele.about}/>
         })}
      </div>
    </div>
  );
}

export default ProjectList;
