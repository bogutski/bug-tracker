import "./App.css";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Board from "./components/Board";
import Project from "./components/Project";



function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path='projects' element={<Project />}/>
                    <Route path='boards' element={<Board />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
