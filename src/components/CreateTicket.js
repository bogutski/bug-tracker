import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../dbConnection";
import ModalTicket from "./modals/ModalTicket";

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
          <ModalTicket setFormData={setFormData} formData={formData}
                         setCurrentBoards={setCurrentBoards}
                         currentBoards={currentBoards} boards={boards}
                         projects={projects} statuses={statuses}
                         onActionTicket={onCreateTicket}
                         modalTitle='Create Ticket'
                         actionName='Create'
            />
      </div>
    </div>
  );
};

export default CreateTicket;
