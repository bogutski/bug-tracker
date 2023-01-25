import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../dbConnection";
import ModalTicket from "./modals/ModalTicket";

const CreateTicket = (props) => {
  const { statuses, projects, boards } = props;

  statuses.sort((a, b) => +(a.statusNumber) - +(b.statusNumber));
  const defaultStatus = statuses.length ? statuses[0].statusName : '';
  const defaultProject = projects[1] || {}; // 'Kompot' by default
  const defaultBoards = boards?.filter((board) => board.projectId === defaultProject.id) || []; // boards for 'Kompot'

  const initState = {
    projectId: defaultProject?.id,
    boardId: defaultBoards[0]?.id,
    status: defaultStatus,
  };

  const [formData, setFormData] = useState({...initState});

  const onCreateTicket = () => {
    const refDoc = collection(db, "Tickets");
    addDoc(refDoc, { ...formData })
      .then((res) => res.id)
      .catch((err) => console.log(err));
    setFormData({ ...initState });
  };

    const onChange = e => {
        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value,
        };
        setFormData({...newFormState});
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
          <ModalTicket formData={formData}
                       onChange={onChange}
                       initState={initState}
                       boards={boards}
                       projects={projects}
                       statuses={statuses}
                       onActionTicket={onCreateTicket}
                       modalTitle='Create Ticket'
                       actionName='Create'
            />
      </div>
    </div>
  );
};

export default CreateTicket;
