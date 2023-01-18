import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import BoardModal from "../modals/BoardModal";
import BoardList from "./BoardList";

const Board = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const {boards, boardName} = props

    const params = useParams();
    const boardId = params.boardId;

    const currentBoard = boards?.find(board => board.id === params.boardId)?.boardName;


    return (
        <div>

            {modal && <BoardModal
                modal={modal}
                toggle={toggle}
                title={"Update Board"}
                boardId={boardId}
                currentBoard={currentBoard}
            />}

            <h1>Board: {currentBoard}</h1>

            <button
                className="btn btn-warning"
                type="button"
                placeholder={boardName}
                onClick={toggle}
            >
                Update
            </button>

            <BoardList  boardId={boardId}/>
        </div>
    );
};

export default Board;
