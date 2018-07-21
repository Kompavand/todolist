import React, {Component} from 'react';
import {TaskListInstance} from "./TaskListModel";
import {TaskList} from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <TaskList model={TaskListInstance}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
