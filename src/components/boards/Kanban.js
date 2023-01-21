import Ticket from "../Ticket";

const Kanban = (props) => {
  const {statuses, tickets, setTickets} = props;

  const sortedStatuses = statuses.sort((a, b) => a.statusNumber - b.statusNumber)


  const moveTicket = (statusId, dir, ticketId) => {
    const currentStatus= +statuses.find(el=>el.id===statusId).statusNumber+dir;
    const nextStatus = statuses.find(el=>+el.statusNumber===currentStatus).statusName
    const newTicket =  tickets.map(el=>el.id===ticketId? {...el, status:nextStatus} : el)
    setTickets(newTicket)

  }

  const ticketsByStatus = (s) => tickets.filter(item => item.status === s);


  return (
    <div className="container">
      <div className="row">

        {sortedStatuses.map((status) => {
          return (
            <div className="col-sm" key={status.statusNumber}>
              {status.statusName}
              {ticketsByStatus(status.statusName).map(item =>
                <Ticket
                  key={item.id}
                  ticket={item}
                  status={status}
                  moveTicket={moveTicket}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>);
};

export default Kanban;