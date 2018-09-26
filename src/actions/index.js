export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        id
    }
};

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    }
};

export const updateTask = (id, text) => {
    return {
        type: 'UPDATE_TASK',
        id, text
    }
};

export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        text
    }
};
