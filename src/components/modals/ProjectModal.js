import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {collection, addDoc, updateDoc, doc} from "firebase/firestore";
import db from "../../dbConnection";

function ProjectModal(props) {

    const {modal, toggle, title, projname, projectId} = props;
    const [projectName, setProjectName] = useState(projname);
    const createProject = (e) => {
        e.preventDefault();
        const refDoc = collection(db, 'Project');
        addDoc(refDoc, {
            projectName
        }).then(res => res.id).catch(err => console.log(err));
        setProjectName('');
    }
    const updateProject = (e) => {
        e.preventDefault();
        updateDoc(doc(db, 'Project', projectId), {projectName})
            .then(r => console.log(r))
            .catch(err => console.log(err));
    }

    function saveButtonHandler(e) {
        if (title === 'Create Project') {
            createProject(e);
        } else {
            updateProject(e);
        }
        toggle();
    }

    return (
        <div>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Project name:</span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="basic-addon1"
                            value={projectName}
                            onChange={e => setProjectName(e.target.value)}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e) => saveButtonHandler(e)}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ProjectModal;
