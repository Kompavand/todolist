import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Task } from "./Task";
import { TaskEdit } from "./TaskEdit";

export class TaskController extends PureComponent {
    state = {
        text: this.props.text || null,
        done: false,
        edit: false
    };

    currentStyles = () => {
        const mainStyle = 'p-3 mt-2 rounded ';
        const color = this.state.done ? 'bg-light text-secondary' : 'bg-primary text-white';
        return (mainStyle + color)
    };

    handleTextChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleDelete = () => {
        this.props.deleteTask(this.props.id);
    };

    // Используется setState(callback) потому, что новый стейт зависит от старого, а setState асинхронный
    toggleStatus = () => this.setState(({ done }) => ({ done: !done }));
    toggleEditMode = () => this.setState(({ edit }) => ({ edit: !edit }));

    saveText = () => {
        this.props.updateTask(this.props.id, this.state.text);
        this.toggleEditMode();
    };

    render() {
        var className = this.currentStyles();

        if (this.state.edit) {
            return (
                <TaskEdit
                    className={className}
                    text={this.state.text}
                    onChangeText={this.handleTextChange}
                    onSave={this.saveText}
                />
            );
        }
        return (
            <Task
                className={className}
                done={this.state.done}
                text={this.state.text}
                onChangeDone={this.toggleStatus}
                onClickEdit={this.toggleEditMode}
                onClickDelete={this.handleDelete}
            />
        );
    }
}