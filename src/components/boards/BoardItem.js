import React from 'react';

const BoardItem = (props) => {
  const {board} = props
  return (
	<>
	  <a className="dropdown-item" href={`/boards/${board.id}`}>{board.boardName}</a>
	</>
  );
};

export default BoardItem;
