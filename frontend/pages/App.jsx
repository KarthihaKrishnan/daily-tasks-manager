import { useState } from "react";
import TaskCard from "../components/TackCard";

function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="app">
            <h1>Daily Tasks Manager</h1>
            {
                tasks.map((task, index) => (
                    <TaskCard key={index} />
                ))
            }
            <TaskCard />
        </div>
    );
}

export default App;