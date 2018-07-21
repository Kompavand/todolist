import * as React from 'react';
import {Task} from '../Task';
import {TaskAdder} from '../TaskAdder';
import 'bootstrap/dist/css/bootstrap.css';

export const TaskList = ({tasks, deleteTask, updateTask, addTask}) => (
    <div>
        {tasks.map((task) =>
            <Task
                key={task.id}
                id={task.id}
                text={task.text}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />
        )}
        <TaskAdder addTask={addTask}/>
    </div>
);