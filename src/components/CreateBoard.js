import React, {useState} from 'react';
import BoardModal from "./modals/BoardModal";

function CreateBoard() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <button
                type="button"
                className="btn btn-link"
                onClick={toggle}
            >Create Board
            </button>
            <BoardModal
                modal={modal}
                toggle={toggle}
                title={"Create Board"}

            />
        </div>
    );
}

export default CreateBoard;
