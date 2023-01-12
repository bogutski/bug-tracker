import React from 'react';
import {useParams} from "react-router-dom";
import BoardList from "../boards/BoardList";

const Project = (props) => {
    const {projects, boards} = props
    const params = useParams();
    const projectId = params.projectId
    console.log(boards)
    return (
        <div>
            <h1>Project: {projects?.find(project => project.id === projectId)?.projectName}</h1>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" href="" id="navbarDropdownMenuLink"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Boards
                </button>
                    <BoardList projectId={projectId} boards={boards}/>
            </div>

        </div>
    );
};

export default Project;
