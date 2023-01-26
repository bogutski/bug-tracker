import React, {useCallback, useEffect, useState} from 'react';

const ModalTicket = (props) => {
    const {
        onChange,
        onClose,
        modal,
        initState,
        setFormData,
        formData,
        statuses, projects, boards,
        onActionTicket,
        modalTitle, actionName
    } = props;

    const getBoards = useCallback((id) => boards.filter((item) => item.projectId === id),
        [boards])

    const [currentBoards, setCurrentBoards] = useState([]);
    const [title, setTitle] = useState('');
    const [project, setProject] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');

    // set initial state
    useEffect(() => {
        setCurrentBoards(getBoards(initState.projectId));
        setProject(initState.projectId);
        setTitle('');
        setDescription('');
        setStatus(statuses[0]?.statusName);
    }, [getBoards, initState.projectId, modal, statuses]);

    // change boards depends on the current project
    useEffect(() => {
        if (formData?.projectId) {
            const currentBoards = getBoards(formData.projectId);
            if (currentBoards.length) {
                setCurrentBoards(currentBoards);
                // when change project, set a first board by default
                setFormData((data) => ({...data, boardId: currentBoards[0].id}))
            } else {
                setCurrentBoards([]);
                setFormData((data) => ({...data, boardId: ''}))
            }
        }
    }, [getBoards, formData?.projectId, setFormData]);

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
                        onClick={onClose}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
        <div className="modal-body">
            <form className="needs-validation" noValidate>
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
                            value={project}
                            onChange={(e) => {
                                setProject(e.target.value);
                                onChange(e);
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
                            className={`form-control ${!currentBoards?.length && 'is-invalid' } `}
                            name="boardId"
                            onChange={(e) => onChange(e)}
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
                            className={`form-control ${!title && 'is-invalid' } `}
                            id="inputTitle"
                            name="title"
                            placeholder="Title"
                            required
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                                onChange(e);
                            }}
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
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value)
                                onChange(e);
                            }}
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
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            onChange(e);
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
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={onActionTicket}
                        disabled={!title || !currentBoards.length}
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
