import "./App.css";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Board from "./components/Board";
import Project from "./components/Project";
import {useEffect, useState} from "react";
import {query, collection, onSnapshot} from 'firebase/firestore';
import db from './dbConnection'

function App() {

    const [projects, setProjects] = useState([]);
    const [boards, setBoards] = useState([])

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
    useEffect(() => {
        getProjects();
        getBoards();
    }, [])

    console.log(boards)
    console.log(projects)

    return (<div className="App">
          <Routes>
              <Route path='/' element={<Layout
                projects={projects}
                boards={boards}
              />}>
                  <Route index element={<Dashboard/>}/>
                  <Route path='projects/:projectId' element={<Project
                    projects={projects}
                  />}/>
                  <Route path='boards/:boardId' element={<Board boards={boards}/>}/>
              </Route>
          </Routes>
      </div>);
}

export default App;
