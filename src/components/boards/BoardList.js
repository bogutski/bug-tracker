import React from 'react';
import BoardItem from "./BoardItem";
import CreateBoard from "../CreateBoard";

const BoardList = (props) => {
    const {boards, projectId} = props
    return (
        <div className="dropdown-menu">
            {!projectId ?
                boards?.map(board => <BoardItem key={board.id}
                                                board={board}/>) : boards?.filter(board => board.projectId === projectId).map(board =>
                    <BoardItem key={board.id} board={board}/>)}
            {projectId && <div>
                <div className="dropdown-divider"></div>
                <CreateBoard/>
            </div>

            }
        </div>
    );
};

export default BoardList;
