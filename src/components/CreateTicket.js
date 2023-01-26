import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../dbConnection";
import ModalTicket from "./modals/ModalTicket";

const CreateTicket = (props) => {
  const { statuses, projects, boards } = props;

  statuses.sort((a, b) => +(a.statusNumber) - +(b.statusNumber));
  const defaultStatus = statuses.length ? statuses[0].statusName : '';
  // choose default project
  const defaultProject = projects[1] || {}; // 'Kompot' by default
  // boards for default project
  const defaultBoards = boards?.filter((board) => board.projectId === defaultProject.id) || [];

  const initState = {
    projectId: defaultProject?.id,
    boardId: defaultBoards[0]?.id,
    status: defaultStatus,
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [formData, setFormData] = useState({});

  const onCreateTicket = () => {
    const refDoc = collection(db, "Tickets");
    addDoc(refDoc, { ...formData })
      .then((res) => res.id)
      .catch((err) => console.log(err));
  };

    const onChange = e => {
        const newFormState = {
            ...initState, ...formData,
            [e.target.name]: e.target.value,
        };
        setFormData(newFormState);
    };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#createTicketModal"
        onClick={toggle}
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
                       setFormData={setFormData}
                       boards={boards}
                       projects={projects}
                       statuses={statuses}
                       onActionTicket={onCreateTicket}
                       onClose={toggle}
                       modal={modal}
                       modalTitle='Create Ticket'
                       actionName='Create'
            />
      </div>
    </div>
  );
};

export default CreateTicket;
