const initialTasks = [
    {id: 1, text: 'Task 1', done: false},
    {id: 2, text: 'Task 2', done: false},
    {id: 3, text: 'Task 3', done: true},
    {id: 4, text: 'Task 4', done: false},
    {id: 5, text: 'Task 5', done: false}
];
let idCounter = 6;

const tasks = (state = initialTasks, action) => {
    switch (action.type) {
        case 'TOGGLE_TASK':
            return state.map(task =>
                (task.id === action.id) ? {...task, done: !task.done} : task
            );
        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.id);
        case 'UPDATE_TASK':
            return state.map(task =>
                (task.id === action.id) ? {...task, text: action.text} : task
            );
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: idCounter++,
                    text: action.text,
                    done: false
                }
            ]
    }
    return state;
};

export default tasks;