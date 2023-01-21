import "./App.css";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Board from "./components/boards/Board";
import Project from "./components/projects/Project";
import {useEffect, useState} from "react";
import {query, collection, onSnapshot, getDocs} from 'firebase/firestore';
import db, {auth} from './dbConnection'
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/Home";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import {onAuthStateChanged} from 'firebase/auth';
import Protected from "./components/Auth/Protected";


function App() {

    const [projects, setProjects] = useState([]);
    const [boards, setBoards] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [authUser, setAuthUser] = useState({});

    const getProjects = () => {
        const projectColRef = query(collection(db, 'Project'));
        onSnapshot(projectColRef, (snapshot) => {
            setProjects(snapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            })))
        })
    }

    const getBoards = () => {
        const coll = query(collection(db, 'Boards'));
        onSnapshot(coll, (snapshot) => {
            setBoards(snapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            })))
        })
    }

    const getTickets = async () => {
        const tickets = await getDocs(query(collection(db, "Tickets")));
        setTickets(tickets.docs.map(doc => ({
            id: doc.id, ...doc.data()
        })))
    }

    const getStatuses = () => {
        const statuses = query(collection(db, 'Statuses'));
        onSnapshot(statuses, (snapshot) => {
            setStatuses(snapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            })))
        })
    }

    useEffect(() => {
        getProjects();
        getBoards();
        getStatuses();
        getTickets().then().catch(err => console.log(err));

        const listen = onAuthStateChanged(auth, user => {
            if(user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, [])

    return (<div className="App">
        <h1>{authUser ? 'Signed in' : 'Signed out'}</h1>
        <Routes>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/' element={<Layout
                projects={projects}
                boards={boards}
                statuses={statuses}
                tickets={tickets}
                authUser={authUser}
            />}>
                <Route index element={<Home/>}/>
                <Route path='/dashboard' element={<Protected user={authUser}><Dashboard/></Protected>}/>
                <Route path='projects/:projectId' element={<Protected user={authUser}><Project
                    projects={projects}
                    boards={boards}
                /></Protected>}/>
                <Route path='boards/:boardId' element={<Protected user={authUser}><Board boards={boards} tickets={tickets} statuses={statuses}/></Protected>}/>
            </Route>
        </Routes>
    </div>);
}

export default App;
