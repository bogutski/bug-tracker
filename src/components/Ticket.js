import React from 'react';

const Ticket = (props) => {
  const {ticket} = props;

  // const moveTask = (id, dir, s) => {
  //     const currentIndex = ticket.status.indexOf(s)
  //
  // }
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
            <h6 className="card-title">Project Name: **** </h6>
          </li>
          <li className="list-group-item">
            <h6 className="card-text">Status: {ticket.status}</h6>
            <button type="button"
                    className="btn btn-light"
                    disabled={ticket.status === 'To Do'}
            >←
            </button>
            <button type="button"
                    className="btn btn-light"
                    disabled={ticket.status === 'Done'}
            >→
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ticket;