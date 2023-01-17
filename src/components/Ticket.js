import React from 'react';

const Ticket = () => {
  return (
    <div className="card" >

      <div className="card-body">
        <h5 className="card-title">Ticket title</h5>
        <p className="card-text">Ticket description</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Ticket status</li>
        <button type="button" className="btn btn-outline-secondary btn-sm">↑</button>
        <button type="button" className="btn btn-outline-secondary btn-sm">↓</button>
      </ul>

      <button type="button" className="btn btn-outline-secondary btn-sm">←</button>
      <button type="button" className="btn btn-outline-secondary btn-sm">→</button>
      <button type="button" className="btn btn-outline-primary">Update</button>
      <button type="button" className="btn btn-outline-primary">Delete</button>
    </div>
  );
};

export default Ticket;