import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {deleteDoc, doc} from "firebase/firestore";
import db from '../../dbConnection'

function DeleteModal(props) {
    const {modal, toggle, title, id} = props;

    const deleteProject = (id) => {
        deleteDoc(doc(db, 'Project', id))
            .then(() => console.log('The project has been deleted successfully'))
            .catch(err => console.log(err))
    }

    function onDelete() {
        deleteProject(id);
        toggle();
        window.location = '/';
    }

    return (
        <div>

            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Delete Project: {title}</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete project: "{title}"?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={onDelete}>
                        Delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;