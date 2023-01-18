import React from 'react';
import {Outlet} from "react-router-dom";
import ProjectList from "./projects/ProjectList";
import BoardList from "./boards/BoardList";
import PersonDropDown from "./PersonDropDown";

const Layout = (props) => {

    const {projects, boards} = props;

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li>
                    <a className="navbar-brand" href="#">🐞Bug-Tracker </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                        </a>
                        <ProjectList
                            projects={projects}
                        />
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Boards
                        </a>
                            <BoardList boards={boards}/>
                    </li>
                </ul>
                <PersonDropDown />
            </div>
        </nav>
        <Outlet />
        </>
    );
};

export default Layout;
