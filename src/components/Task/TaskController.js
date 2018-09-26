import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Task } from "./Task";
import { TaskEdit } from "./TaskEdit";

export class TaskController extends PureComponent {
    state = {
        edit: false,
        text: this.props.text
    };

    currentStyles = () => {
        const mainStyle = 'p-3 mt-2 rounded ';
        const color = this.props.done ? 'bg-light text-secondary' : 'bg-primary text-white';
        return (mainStyle + color)
    };

    handleTextChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleDelete = () => {
        this.props.deleteTask(this.props.id);
    };

    toggleStatus = () => {
        this.props.toggleTask(this.props.id)
    };

    toggleEditMode = () => this.setState(({ edit }) => ({ edit: !edit }));

    saveText = () => {
        this.props.updateTask(this.props.id, this.state.text);
        this.toggleEditMode();
    };

    render() {
        const className = this.currentStyles();

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
                done={this.props.done}
                text={this.state.text}
                onChangeDone={this.toggleStatus}
                onClickEdit={this.toggleEditMode}
                onClickDelete={this.handleDelete}
            />
        );
    }
}