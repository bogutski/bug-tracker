import Ticket from "../Ticket";

const Kanban = (props) => {
  const {statuses, projects, boards, tickets, board, onUpdateTicket, moveTicket} = props;
  const ticketsByStatus = (status) => tickets.filter(item => item.status === status);

  return (
    <div className="container">
      <div className="row">

        {statuses.map((status) => {
          return (
            <div className="col-sm" key={status.statusNumber}>
              {status.statusName}
              {ticketsByStatus(status.statusName).map(item =>
                <Ticket
                  key={item.id}
                  ticket={item}
                  status={status}
                  moveTicket={moveTicket}
                  board={board}
                  projects={projects}
                  boards={boards}
                  statuses={statuses}
                  tickets={tickets}
                  onUpdateTicket={onUpdateTicket}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>);
};

export default Kanban;