import React from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = (props) => {

    const {projects} = props;

    return (
        <div className="dropdown-menu" >
            {projects?.map(project => <ProjectListItem
                project={project}
                key={project.id}
            />)}
        </div>
    );
};

export default ProjectList;