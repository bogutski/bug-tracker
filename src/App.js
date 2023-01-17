import "./App.css";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Board from "./components/boards/Board";
import Project from "./components/projects/Project";
import {useEffect, useState} from "react";
import {query, collection, onSnapshot, getDocs} from 'firebase/firestore';
import db from './dbConnection'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

    const [projects, setProjects] = useState([]);
    const [boards, setBoards] = useState([])
    const [statuses, setStatuses] = useState([])
    const [tickets, setTickets] = useState([])

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
    }, [])


    return (<div className="App">
        <Routes>
            <Route path='/' element={<Layout
                projects={projects}
                boards={boards}
                statuses={statuses}
                tickets={tickets}
            />}>
                <Route index element={<Dashboard/>}/>
                <Route path='projects/:projectId' element={<Project
                    projects={projects}
                    boards={boards}
                />}/>
                <Route path='boards/:boardId' element={<Board boards={boards} tickets={tickets}/>}/>
            </Route>
        </Routes>
    </div>);
}

export default App;
