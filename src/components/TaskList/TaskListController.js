import React, {Component} from 'react';
import {TaskList} from './TaskList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleTask} from "../../actions";
import {deleteTask} from "../../actions";
import {updateTask} from "../../actions";
import {addTask} from "../../actions";

class TaskListController extends Component {

    render() {
        return (
            <TaskList
                tasks={this.props.tasks}
                deleteTask={this.props.deleteTask}
                updateTask={this.props.updateTask}
                addTask={this.props.addTask}
                toggleTask={this.props.toggleTask}
            />
        )
    };
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleTask: toggleTask,
        deleteTask: deleteTask,
        updateTask: updateTask,
        addTask: addTask
    }, dispatch)
};

const connectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskListController);

export {connectedTaskList};