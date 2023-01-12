import React from 'react';
import {useParams} from "react-router-dom";

const Board = (props) => {
  const {boards} = props
  const params = useParams();
  const currentBoard= boards.filter(board => board.id === params.boardId)[0]
  console.log(currentBoard)
    return (
        <div>
            <h1>Board: </h1>
        </div>
    );
};

export default Board;
