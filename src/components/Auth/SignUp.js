import React, {useState} from 'react';
import {auth} from "../../dbConnection";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const nav = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential);
                nav('/dashboard');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign Up</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="btn float-right signup_btn"
                                    onClick={signUp}
                                />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;