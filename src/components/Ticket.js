import UpdateTicket from "./UpdateTicket";

const Ticket = (props) => {
  const {ticket, status, moveTicket, projects, boards, statuses, onUpdateTicket} = props;
  const currentProject = projects?.find(project => project.id === ticket.projectId) || '';
  const currentBoard = boards?.find(board => board.id === ticket.boardId) || '';

  return (
    <div className="card">
      <div className="card-header">
        Title: {ticket.title}
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h6 className="card-text">Description:</h6>
            <p className="card-text">
              {ticket.description}
            </p>
          </li>
          <li className="list-group-item">
            <h6 className="card-title">{currentProject?.projectName}</h6>
          </li>
          <li className="list-group-item">
            <h6 className="card-text">Status: {ticket.status}</h6>
            <button type="button"
                    className="btn btn-light"
                    disabled={ticket.status === 'To Do'}
                    onClick={()=>moveTicket(status.id, -1, ticket.id)}
            >←
            </button>
            <button type="button"
                    className="btn btn-light"
                    disabled={ticket.status === 'Done'}
                    onClick={()=>moveTicket(status.id, 1, ticket.id)}
            >→
            </button>
          </li>
        </ul>
        <UpdateTicket ticket={ticket} currentBoard={currentBoard}
          projects={projects} boards={boards} statuses={statuses}
          onUpdateTicket={onUpdateTicket} />
      </div>
    </div>
  );
};

export default Ticket;