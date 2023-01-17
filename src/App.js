import "./App.css";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Board from "./components/boards/Board";
import Project from "./components/projects/Project";
import {useEffect, useState} from "react";
import {query, collection, onSnapshot} from 'firebase/firestore';
import db from './dbConnection'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

    const [projects, setProjects] = useState([]);
    const [boards, setBoards] = useState([]);
    const [tickets, setTickets] = useState([]);

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

    const getTickets = () => {
        const coll = query(collection(db, 'Tickets'));
        onSnapshot(coll, (snapshot) => {
            setTickets(snapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            })))
        })
    }

    useEffect(() => {
        getProjects();
        getBoards();
        getTickets();
    }, [])


    return (<div className="App">
        <Routes>
            <Route path='/' element={<Layout
                projects={projects}
                boards={boards}
            />}>
                <Route index element={<Dashboard/>}/>
                <Route path='projects/:projectId' element={<Project
                    projects={projects}
                    boards={boards}
                />}/>
                <Route path='boards/:boardId' element={<Board boards={boards}/>}/>
            </Route>
        </Routes>
    </div>);
}

export default App;
