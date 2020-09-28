// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (pr) => {
    return (
        <div className="todo-list">
            {pr.list.map((item) => (
                <Todo key={item.id} item={item} toggleItem={pr.toggleItem} />
            ))}
            <div className="footer">
                <button onClick={pr.clearCompleted}>Clear List</button>
            </div>
        </div>
    );
};

export default TodoList;