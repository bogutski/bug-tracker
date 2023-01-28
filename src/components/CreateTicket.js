import React, {useState} from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../dbConnection";
import ModalTicket from "./modals/ModalTicket";

const CreateTicket = (props) => {
  const { statuses, projects, boards } = props;
  statuses.sort((a, b) => +(a.statusNumber) - +(b.statusNumber));

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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value}
        );
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
          <ModalTicket onChange={onChange}
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
