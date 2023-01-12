import React from 'react';
import BoardItem from "./BoardItem";

const BoardList = (props) => {
    const {boards} = props
    return (
      <div className="dropdown-menu">
          {boards.map(board => <BoardItem key={board.id} board={board}/>)}
      </div>
    );
};

export default BoardList;
