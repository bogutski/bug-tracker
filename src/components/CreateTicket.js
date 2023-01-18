import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../dbConnection";

const CreateTicket = (props) => {
  const { statuses, projects, boards } = props;

  const defaultStatus = statuses[0]?.statusName; // 1st status by default
  const defaultProject = projects[1] || {}; // 'Kompot' by default
  const defaultBoards =
      boards.filter((board) => board.projectId === defaultProject.id) || []; // boards for 'Kompot'

  const [currentBoards, setCurrentBoards] = useState([]);

  const initState = {
    projectId: defaultProject?.id,
    boardId: defaultBoards[0]?.id,
    status: defaultStatus,
  };

  const [formData, setFormData] = useState({ ...initState });

  useEffect(() => {
      setCurrentBoards(defaultBoards);
  }, [projects, boards]);

  const onCreateTicket = () => {
    const refDoc = collection(db, "Tickets");
    addDoc(refDoc, {
      ...formData,
      status: formData.status ? formData.status : defaultStatus,
      boardId: formData.boardId ? formData.boardId : currentBoards[0].id,
      projectId: formData.projectId ? formData.projectId : defaultProject.id,
    })
      .then((res) => res.id)
      .catch((err) => console.log(err));
    setFormData({ ...initState });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#createTicketModal"
      >
        Create Ticket
      </button>
      <div
        className="modal fade"
        id="createTicketModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Ticket
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
                onClick={onCreateTicket}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
