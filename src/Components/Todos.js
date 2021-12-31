import React from "react";
import {List, ListGroup, ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import App from "../App";

const Todos = ({todos, markComplete}) => {
    return(
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo =>(
                <ListGroupItem
                key={todo.id}> 
                    {todo.todoString}
                    <span className="float-right"
                    onClick={() =>markComplete(todo.id)}
                    ><FaCheckDouble/></span>

                </ListGroupItem>
                
            ))}
        </ListGroup>

    )
};

export default Todos;

//key=not looping through 1 item now it will loop through multiple items
                //{todo.todostring} prop they are storing
                //span = button and icon to perform float right icon floating to right
                //onClick= markcomplete value is passed