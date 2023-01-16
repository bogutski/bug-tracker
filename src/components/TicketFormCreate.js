import React from 'react';

const TicketFormCreate = () => {
    return  <form>
        <div className="form-group row">
            <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title:</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTitle" placeholder="Title" />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="inputStatus" className="col-sm-2 col-form-label">Status:</label>
            <div className="col-sm-10">
            <select id="inputStatus" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="inputDesc">Description:</label>
            <textarea className="form-control" id="inputDesc" rows="3"></textarea>
        </div>
    </form>
};
export default TicketFormCreate;