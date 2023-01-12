import React from 'react';

const ProjectListItem = (props) => {

    const {project} = props;

    return (
        <>
            <a className="dropdown-item" href={`/projects/${project.id}`}>{project.projectName}</a>
        </>
    );
};

export default ProjectListItem;