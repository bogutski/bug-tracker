import React from 'react';
import Carousel from "./Carousel";

const Home = () => {
    return (
        <div>
            <Carousel/>
            <br/>
            <div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card  border-primary mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Check progress of your project</h5>
                            <p className="card-text">
                            You can create your own project, board on it and check progress of working.
                            It's simple and convenient - just use our Kanban board app.
                            </p>
                            <a className="btn btn-outline-primary ms-2" href="/signup">Sign Up</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card  border-primary mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Use Kanban board</h5>
                            <p className="card-text">
                                The Kanban board is a tool for workflow visualization,
                                designed to help you bring clarity to your work process and enhance efficiency by limiting work in progress.
                            </p>
                            <a className="btn btn-outline-primary ms-2" href="/signup">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;
