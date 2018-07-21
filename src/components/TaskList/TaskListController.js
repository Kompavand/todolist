import React, {Component} from 'react';
import {TaskList} from './TaskList';

export class TaskListController extends Component {
    state = {
        model: this.props.model
    };

    deleteTask = (id) => this.setState(({model}) => ({model: model.deleteTask(id)}));
    updateTask = (id, text) => this.setState(({model}) => ({model: model.updateTask(id, text)}));
    addTask = (text) => this.setState(({model}) => ({model: model.addTask(text)}));

    render() {
        return (
            <TaskList
                tasks={this.state.model.tasks}
                deleteTask={this.deleteTask}
                updateTask={this.updateTask}
                addTask={this.addTask}
            />
        )
    };
}