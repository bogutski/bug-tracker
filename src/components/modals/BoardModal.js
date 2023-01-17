import React, {useState} from 'react';
import {Button, Input, InputGroup, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const BoardModal = (props) => {

    const {modal, toggle} = props;
    const [boardName, setBoardName] = useState();


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Create Board</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupText>
                            Board's name
                        </InputGroupText>
                        <Input
                            value={boardName}
                            onChange={(e) => setBoardName(e.target.value)}
                        />
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Ok
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default BoardModal;