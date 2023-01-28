import React from 'react';


const EditUserProfile = () => {
    return (

        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit profile</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Photo</span>
                            <input type="text" className="form-control-file" placeholder="Photo" aria-label="Photo"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">First Name</span>
                            <input type="text" className="form-control" placeholder="First Name" aria-label="First Name"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Last Name</span>
                            <input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">E-mail</span>
                            <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Phone Number</span>
                            <input type="text" className="form-control" placeholder="Phone Number" aria-label="Phone Number"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Address</span>
                            <input type="text" className="form-control" placeholder="Address" aria-label="Address"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Password</span>
                            <input type="text" className="form-control" placeholder="Password" aria-label="Password"
                                   aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default EditUserProfile;