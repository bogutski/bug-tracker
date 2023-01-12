import React from 'react';
import {useParams} from "react-router-dom";

const Project = (props) => {
    const {projects} = props
    const params = useParams();
    return (
        <div>
            <h1>Project: {projects?.find(project => project.id === params.projectId)?.projectName}</h1>
        </div>
    );
};

export default Project;