import React, {PureComponent} from 'react';
import {TaskAdder} from "./TaskAdder";

export class TaskAdderController extends PureComponent{
    state = {
        text: ''
    };

    handleTextChange = ({ target: { name, value } }) => this.setState({ [name]: value });
    handleSave = () => {
        this.props.addTask(this.state.text);
        this.setState({text: ''})
    };

    render() {
        return(
            <TaskAdder
                text={this.state.text}
                onChangeText={this.handleTextChange}
                onSave={this.handleSave}
            />
        )
    }
}