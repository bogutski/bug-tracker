import React from 'react';
import Ticket from "../Ticket";

const Kanban = (props) => {
    const {statuses, tickets} = props
    // sort statuses by statusNumber
 const sortedByStatusNumber = statuses.sort((a,b) => a.statusNumber-b.statusNumber)

    const ticketsByStatus = (s) => tickets.filter(item => item.status === s);
    return (
        <div className="container">
            <div className="row">
                {sortedByStatusNumber.map((status) => {
                   return <div className="col-sm" key={status.statusNumber}>
                       {status.statusName}
                       {ticketsByStatus(status.statusName).map(item => <Ticket key={item.id} ticket={item}/>)}
                   </div>
                })}
            </div>
        </div>    );
};

export default Kanban;