import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Board from "./components/boards/Board";
import Project from "./components/projects/Project";
import { useEffect, useState } from "react";
import { query, collection, onSnapshot, getDocs, doc, updateDoc } from "firebase/firestore";
import db, { auth } from "./dbConnection";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Protected from "./components/Auth/Protected";
import UserProfile from "./components/profile/UserProfile";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import ResetPassword from "./components/Auth/ResetPassword";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  // const { user} = UserAuth();
  const [projects, setProjects] = useState([]);
  const [boards, setBoards] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [authUser, setAuthUser] = useState({});

  const getProjects = () => {
    const projectColRef = query(collection(db, "Project"));
    onSnapshot(projectColRef, (snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  const getBoards = () => {
    const coll = query(collection(db, "Boards"));
    onSnapshot(coll, (snapshot) => {
      setBoards(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  const getTickets = async () => {
    const tickets = await getDocs(query(collection(db, "Tickets")));
    setTickets(
      tickets.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };

  const getStatuses = () => {
    const statuses = query(collection(db, "Statuses"));
    onSnapshot(statuses, (snapshot) => {
      setStatuses(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  const onUpdateTicket = (ticketId, newTicket) => {
    console.log('onUpdateTicket newTicket: ', newTicket);
    updateDoc(doc(db, 'Tickets', ticketId), {...newTicket})
        .then(r => {
          console.log(r);
          const newTickets = tickets.map((ticket) => ticket.id === newTicket.id ? newTicket : ticket)
          setTickets(newTickets);
        })
        .catch(err => console.log(err));
};

const sortedStatuses = statuses.sort((a, b) => a.statusNumber - b.statusNumber)

const moveTicket = (statusId, dir, ticketId) => {
  const currentStatus = +statuses.find(el => el.id === statusId).statusNumber + dir;
  const nextStatus = statuses.find(el => +el.statusNumber === currentStatus).statusName;
  const ticketToMove = tickets.find(el => el.id === ticketId);
  const newTicket = ticketToMove && {...ticketToMove, status: nextStatus};
  if (newTicket) onUpdateTicket(ticketId, newTicket);
}

  useEffect(() => {
    getProjects();
    getBoards();
    getStatuses();
    getTickets()
      .then()
      .catch((err) => console.log(err));

    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser({});
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <Layout
                projects={projects}
                boards={boards}
                statuses={statuses}
                tickets={tickets}
                authUser={authUser}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route
              path="/dashboard"
              element={
                <Protected user={authUser}>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="projects/:projectId"
              element={
                <Protected user={authUser}>
                  <Project projects={projects} boards={boards} />
                </Protected>
              }
            />
            <Route
              path="boards/:boardId"
              element={
                <Protected user={authUser}>
                  <Board
                    boards={boards}
                    tickets={tickets}
                    statuses={sortedStatuses}
                    projects={projects}
                    onUpdateTicket={onUpdateTicket}
                    moveTicket={moveTicket}
                  />
                </Protected>
              }
            />
          </Route>
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
