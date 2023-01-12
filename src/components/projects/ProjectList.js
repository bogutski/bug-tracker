import React from 'react';
import ProjectListItem from "./ProjectListItem";
import CreateProject from "../CreateProject";

const ProjectList = (props) => {

    const {projects} = props;

    return (
        <div className="dropdown-menu" >
            {projects?.map(project => <ProjectListItem
                project={project}
                key={project.id}
            />)}
            <div className="dropdown-divider"></div>
            <CreateProject/>
        </div>

    );
};

export default ProjectList;
