import React from 'react';
import TicketFormCreate from "./TicketFormCreate"

const CreateTicket = () => (
    <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createTicketModal">
            Create Ticket
        </button>
        <div className="modal fade" id="createTicketModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ticket title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <TicketFormCreate />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)


export default CreateTicket;
