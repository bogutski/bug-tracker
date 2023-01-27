import React, {useCallback, useEffect, useState} from 'react';

const ModalTicket = (props) => {
    const {
        onChange,
        onClose,
        modal,
        statuses, projects, boards,
        onActionTicket,
        modalTitle, actionName
    } = props;

    const getBoards = useCallback((id) => {
            if (boards.length)
                return boards.filter((item) => item.projectId === id);
            else return []
        }, [boards]);

    const [currentBoards, setCurrentBoards] = useState([]);
    const [title, setTitle] = useState('');
    const [board, setBoard] = useState('');
    const [project, setProject] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [isDirty, setIsDirty] = useState(false); // first form render - don't show errors
    const [isValid, setValid] = useState(false);

    // back to initial state when open/close the form
    useEffect(() => {
        setCurrentBoards([]);
        setProject('');
        setBoard('');
        setTitle('');
        setDescription('');
        setStatus('');
        setIsDirty(false);
        setValid(false);
    }, [modal]);

    useEffect(() => {
        if (project) {
            const currentBoards = getBoards(project);
            if (currentBoards.length) {
                setCurrentBoards(currentBoards);
            } else {
                setCurrentBoards([]);
            }
            setBoard('');
        }
    }, [getBoards, project]);

    useEffect(() => {
        setValid(!isDirty || (title && status && project && board && currentBoards.length));
    }, [title, project, board, status, isDirty, currentBoards.length])

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
                            className={`form-control ${!project && isDirty && 'is-invalid' } `}
                            name="projectId"
                            value={project}
                            required
                            onChange={(e) => {
                                setIsDirty(true);
                                setProject(e.target.value);
                                onChange(e);
                            }}
                        >
                           { !project &&
                               <option key={'defaultProjectKey'} value={''}>
                                   {'Select a project...'}
                               </option>
                            }
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
                            className={`form-control ${!board && isDirty && 'is-invalid' } `}
                            name="boardId"
                            required
                            value={board ? board : 'Select a board...'}
                            onChange={(e) => {
                                setIsDirty(true);
                                setBoard(e.target.value);
                                onChange(e);
                            }}
                            disabled={!currentBoards?.length}
                        >
                            {project && !currentBoards?.length && <option>No boards for the project...</option>}
                            <option key={'defaultBoardKey'} value={''}>
                                {'Select a board...'}
                            </option>
                            {project && currentBoards?.length &&
                                currentBoards.map((board) => (
                                <option key={board.id} value={board.id}>
                                    {board.boardName}
                                </option>))}
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
                            className={`form-control ${!title && isDirty && 'is-invalid' } `}
                            id="inputTitle"
                            name="title"
                            required
                            value={title}
                            onChange={(e) => {
                                setIsDirty(true);
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
                            className={`form-control ${!status && isDirty && 'is-invalid' } `}
                            name="status"
                            required
                            value={status}
                            onChange={(e) => {
                                setIsDirty(true);
                                setStatus(e.target.value)
                                onChange(e);
                            }}
                        >
                            {!status && <option key={'defaultStatusKey'} value={''}>
                                {'Select a status...'}
                            </option>}
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
                            setIsDirty(true);
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
                        disabled={!isValid}
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
