import React, {useState} from 'react';
import {addDoc, collection} from "firebase/firestore";
import db from "../dbConnection";

const CreateTicket = (props) => {
    const {statuses} = props;
    const defaultStatus = statuses[0]?.statusName;

    // ***** for dev/test purposes - should be replaced *****
    // const initState = {
    //     //boardName: 'QA automation'
    //     boardId: 'G1styIxn9m7t2Am0daFu',
    //     // projectName: 'Vanilla'
    //     projectId: 'xqG9hy7825MJ7sxBH8QC',
    // }
    const initState = {
        //boardName: 'Backend'
        boardId: 'cJ3I6JR0XUnFP96e8o20',
        // projectName: 'TableRow'
        projectId: 'zNDIMSqyV06ozxjZtcQl',
    }
    // ***** for dev/test purposes - should be replaced *****

    const [formData, setFormData] = useState({...initState});

    const onCreateTicket = () => {
        const refDoc = collection(db, 'Tickets');
        addDoc(refDoc, {
            ...formData, status: formData.status ? formData.status : defaultStatus
        }).then(res => res.id).catch(err => console.log(err));
        setFormData({...initState});
    }

    return <div>
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
                        <form>
                            <div className="form-group row">
                                <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputTitle" placeholder="Title"
                                           onChange={e => setFormData({...formData, title: e.target.value})}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status:</label>
                                <div className="col-sm-10">
                                    <select id="inputStatus" className="form-control"
                                        onChange={e => setFormData({...formData, status: e.target.value})}>
                                        {statuses.map(status => <option key={status.id} value={status.statusName}>{status.statusName}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputDesc">Description:</label>
                                <textarea className="form-control" id="inputDesc" rows="3"
                                   onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onCreateTicket}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CreateTicket;
