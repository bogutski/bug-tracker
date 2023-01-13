import React, {useState} from 'react';
import ProjectModal from "./modals/ProjectModal";

const CreateProject = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <button
                type="button"
                className="btn btn-link"
                onClick={toggle}
            >Create Project</button>
            <ProjectModal
                modal={modal}
                toggle={toggle}
                title={"Create Project"}
            />
        </div>
    );
};

export default CreateProject;
