import React from 'react';
import "./Todo.css";


const Todo = (pr) => {
    return (
        <div
        onClick={ () => pr.toggleItem(props.item.id)}
        className={`item${pr.item.completed ? "completed" : ""}`}
        >
            <p>{pr.item.name}</p>
        </div>
    );
};
export default Todo;