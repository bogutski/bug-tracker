import React from 'react';
import {useParams} from "react-router-dom";
import Ticket from "../Ticket";

const Board = (props) => {
  const {boards, tickets} = props;
  const params = useParams();
  const currentBoard = boards.filter(board => board.id === params.boardId)[0];
  const ticketsCurrentBoard = tickets?.filter(ticket => ticket.boardId === currentBoard.id) || [];

    return (
        <div>
            <h1>Board: {boards?.find(board => board.id === params.boardId)?.boardName}</h1>
            <div>
                <h3>Kanban board</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            Status_1
                            <Ticket />
                            <Ticket />
                        </div>
                        <div className="col-sm">
                            Status_2
                            {ticketsCurrentBoard.map((item) => (
                                <Ticket key={item.id} {...item}/>
                            ))}
                        </div>
                        <div className="col-sm">
                            Status_3
                            <Ticket />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
