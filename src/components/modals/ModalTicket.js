import React from 'react';

const ModalTicket = (props) => {
    const {
        setFormData, formData,
        setCurrentBoards, currentBoards,
        statuses, projects, boards,
        onActionTicket,
        modalTitle, actionName
    } = props
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
                            onChange={(e) => {
                                setFormData({ ...formData, projectId: e.target.value });
                                setCurrentBoards(boards.filter((item) => item.projectId === e.target.value));
                            }}
                        >
                            {projects.map((project) => (
                                project.projectName &&
                                <option key={project.id} value={project.id}>
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
                            onChange={(e) => setFormData({ ...formData, boardId: e.target.value })}
                            disabled={!currentBoards.length}
                        >
                            {currentBoards.length ? currentBoards.map((board) => (
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
                            placeholder="Title"
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                            onChange={(e) => setFormData({...formData, status: e.target.value})}
                        >
                            {statuses.map((status) => (
                                <option key={status.id} value={status.statusName}>
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
                        rows="3"
                        onChange={(e) => {
                            setFormData({...formData, description: e.target.value})
                        }}
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
                        // onClick={onCreateTicket}
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
