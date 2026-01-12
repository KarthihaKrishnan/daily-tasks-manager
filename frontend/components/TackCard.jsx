import { useState } from 'react';

function TaskCard() {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTasks() {
        if (newTask.trim() === "") return;

        setTaskList([...taskList, newTask]);
        setNewTask("");
    }

    return (
        <div className="task-card">
            <h3>My Daily Tasks</h3>
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

            <button onClick={addTasks}>Add Task</button>

            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => setTaskList(taskList.filter((_, i) => i !== index))}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskCard;