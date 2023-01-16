import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Ticket from "../Ticket";
import {collection, query, getDocs} from "firebase/firestore";
import db from "../../dbConnection";

const Board = (props) => {
  const {boards} = props;
  const params = useParams();
  const currentBoard = boards.filter(board => board.id === params.boardId)[0];
  const [ticketList, setTicketList] = useState([]);

    const getTickets = async () => {
        const tickets = await getDocs(query(collection(db, "Tickets")));
        setTicketList(tickets.docs.map(doc => ({
            id: doc.id, ...doc.data()
        })))
    }

    useEffect(() => {
        getTickets().then().catch(err => err);
    }, [])

    return (
        <div>
            <h1>Board: {boards?.find(board => board.id === params.boardId)?.boardName}</h1>
            <div>
                <h3>Kanban board</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            Status_1
                            <Ticket />
                            <Ticket />
                        </div>
                        <div className="col-sm">
                            Status_2
                            {ticketList.map((item) => (
                                <Ticket key={item.id} {...item}/>
                            ))}
                        </div>
                        <div className="col-sm">
                            Status_3
                            <Ticket />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
