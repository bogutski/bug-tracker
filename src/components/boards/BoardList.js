import React from 'react';
import BoardItem from "./BoardItem";

const BoardList = (props) => {
    const {boards, projectId} = props
    return (
      <div className="dropdown-menu">
          {!projectId ?
            boards?.map(board => <BoardItem key={board.id} board={board}/>)
            : boards?.filter(board => board.projectId === projectId).map(board => <BoardItem key={board.id} board={board}/>)}
      </div>
    );
};

export default BoardList;
