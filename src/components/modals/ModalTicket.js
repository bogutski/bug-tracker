import React, {useEffect, useState} from 'react';

const ModalTicket = (props) => {
    const {
        onChange,
        initState,
        formData,
        statuses, projects, boards,
        onActionTicket,
        modalTitle, actionName
    } = props;

    const [currentBoards, setCurrentBoards] = useState([]);

    useEffect(() => {
        setCurrentBoards(boards.filter((item) => item.projectId === initState.projectId));
    }, [initState.projectId]);

    useEffect(() => {
        setCurrentBoards(boards.filter((item) => item.projectId === formData.projectId));
    }, [formData.projectId]);

    return ( <>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        {modalTitle}
                    </h5>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
        <div className="modal-body">
            <form>
                <div className="form-group row">
                    <label
                        htmlFor="inputProject"
                        className="col-sm-2 col-form-label"
                    >
                        Project:
                    </label>
                    <div className="col-sm-10">
                        <select
                            id="inputProject"
                            className="form-control"
                            name="projectId"
                            defaultValue={initState.projectId}
                            onChange={(e) => onChange(e)}
                        >
                            {projects.map((project) => (
                                project.projectName &&
                                <option key={project.id} value={project.id} selected={initState.projectId === project.id}>
                                    {project.projectName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputBoard"
                        className="col-sm-2 col-form-label"
                    >
                        Board:
                    </label>
                    <div className="col-sm-10">
                        <select
                            id="inputBoard"
                            className="form-control"
                            name="boardId"
                            onChange={onChange}
                            disabled={!currentBoards?.length}
                        >
                            {currentBoards?.length ? currentBoards.map((board) => (
                                <option key={board.id} value={board.id}>
                                    {board.boardName}
                                </option>
                            )): <option>No boards for the project...</option>}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label
                        htmlFor="inputTitle"
                        className="col-sm-2 col-form-label"
                    >
                        Title:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputTitle"
                            name="title"
                            placeholder="Title"
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputStatus"
                        className="col-sm-2 col-form-label"
                    >
                        Status:
                    </label>
                    <div className="col-sm-10">
                        <select
                            id="inputStatus"
                            className="form-control"
                            name="status"
                            onChange={onChange}
                        >
                            {statuses.map((status) => (
                                <option key={status.id} value={status.statusName} >
                                    {status.statusName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputDesc">Description:</label>
                    <textarea
                        className="form-control"
                        id="inputDesc"
                        name="description"
                        rows="3"
                        onChange={onChange}
                    ></textarea>
                </div>
            </form>
        </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={onActionTicket}
                    >
                        {actionName}
                    </button>
                </div>
            </div>
        </div>
</>
    );
};

export default ModalTicket;
