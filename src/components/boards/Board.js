import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import BoardModal from "../modals/BoardModal";
import BoardList from "./BoardList";
import {doc, updateDoc} from "firebase/firestore";
import db from "../../dbConnection";
import Kanban from "./Kanban";

const Board = (props) => {
  const {boards, projects, boardName, tickets, statuses, onUpdateTicket, moveTicket} = props;
  const params = useParams();
  const boardId = params.boardId;
  const currentBoard = boards?.find(board => board.id === boardId);
  const ticketsCurrentBoard = tickets?.filter(ticket => ticket.boardId === boardId) || [];

  const currentBoardName = currentBoard?.boardName;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

    const updateBoard = (e) => {
        e.preventDefault();
        updateDoc(doc(db, 'Board', boardId), {boardName})
            .then(r => console.log(r))
            .catch(err => console.log(err));
    }

    return (
        <div>
            {modal && <BoardModal
                modal={modal}
                toggle={toggle}
                title={"Update Board"}
                boardId={boardId}
                currentBoard={currentBoard}
                currentBoardName={currentBoardName}
                updateBoard={updateBoard}
            />}

            <h1>Board: {currentBoardName}</h1>
            <button
                className="btn btn-warning"
                type="button"
                placeholder={boardName}
                onClick={toggle}
            >
                Update
            </button>
            <Kanban
                board={currentBoard}
                boards={boards}
                projects={projects}
                statuses={statuses}
                tickets={ticketsCurrentBoard}
                onUpdateTicket={onUpdateTicket}
                moveTicket={moveTicket} />
            <BoardList  boardId={boardId}/>
        </div>
    );
};

export default Board;
