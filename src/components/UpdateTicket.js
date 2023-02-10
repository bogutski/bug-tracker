import React, {useState} from "react";
import ModalTicket from "./modals/ModalTicket";

const UpdateTicket = (props) => {
  const { ticket, currentBoard, projects, boards, statuses, onUpdateTicket } = props;
  const initData = { ...ticket }

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [formData, setFormData] = useState();

  const onChange = e => {
      setFormData({
          ...initData,
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
        data-target={`#${ticket.id}`}
        onClick={() => {
            toggle();
            setFormData(ticket);
        }
      }
      >
        Update
      </button>
      <div
        className="modal fade"
        id={`${ticket.id}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
          <ModalTicket onChange={onChange}
                       boards={boards}
                       projects={projects}
                       statuses={statuses}
                       ticket={formData}
                       currentBoard={currentBoard}
                       onActionTicket={() => onUpdateTicket(ticket.id, formData)}
                       onClose={toggle}
                       modal={modal}
                       modalTitle='Update Ticket'
                       actionName='Update'
            />
      </div>
    </div>
  );
};

export default UpdateTicket;
