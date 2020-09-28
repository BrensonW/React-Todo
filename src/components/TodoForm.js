import React from 'react';

class TodoForm extends React.Componet {
    constructor() {
        super();
        this.state = {
            item: "",
        };
    }

    // Handling Changes

    handleChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    // Handling Submit


    submitForm = (e) => {
        e.preventDefault();
        this.setState({ item: ""});
        this.pr.addItem(this.state.item);
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                type="text"
                name="item"
                value={this.state.item}
                placeholder="Add a new task?"
                onChange={this.handleChanges}
                />
                <button>Add To List</button>
            </form>
        );
    }
}
export default TodoForm;