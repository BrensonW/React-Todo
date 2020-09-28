import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const list = [
  {
    task: "Make My ToDo App",
    id: 123,
    completed: false,
  },
  {
    task: "Style ToDo App",
    id: 1234,
    completed: false,
  },
  {
    task: "Complete project and ace school",
    id: 12345,
    completed: false,
  },
  {
    task: "relax",
    id: 123456,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
   super();
   this.state = {
     list,
   };
  }

 // checking that item is completed

 toggleItem = (itemId) => {
   console.log("TodoForm: toggleItem: itemId:", itemId);
   this.setState({
     list: this.state.list.map((item) =>
     itemId === item.id ? { ...item, completed: !item.completed} : item
     ),
   });

 };

 // Clearing Completed Items

 clearCompleted = (e) => {
   //
   this.setState({
     list: this.state.list.filter((item) => !item.completed),
   });
 };

 // Adding new tasks to the list

 addItem = (itemId) => {
   this.setState({
     list: [
       ...this.state.list,
       { id: Date.now(), name: itemId, completed: false },
     ],
   });
 };

 render() {
   return (
     <div className="App">
       <div className="header">
         <h1>My To-Do List!</h1>
         <TodoForm addItem={this.addItem} />
       </div>
       <TodoList
       list={this.state.list}
       toggleItem={this.toggleItem}
       clearCompleted={this.clearCompleted}
       />
       
     </div>
   );
 }
}

export default App;