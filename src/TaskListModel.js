class TaskListModel {
    constructor(tasks) {
        this.tasks = tasks;
    }

    deleteTask(id) {
        this.tasks.forEach((task, i) => {
            if (task.id === id) {
                this.tasks.splice(i, 1);
            }
        });
        return this;
    }

    updateTask(id, text) {
        this.tasks.forEach((task, i) => {
            if (task.id === id) {
                this.tasks[i].text = text;
            }
        });
        return this;
    }

    addTask(text) {
        var lastTask = this.tasks[this.tasks.length - 1];
        var id = lastTask.id + 1;
        this.tasks.push({id: id, text: text});
        return this;
    }
}

var tasks = [
    {id: 1, text: 'Task 1'},
    {id: 2, text: 'Task 2'},
    {id: 3, text: 'Task 3'},
    {id: 4, text: 'Task 4'},
];

export var TaskListInstance = new TaskListModel(tasks);