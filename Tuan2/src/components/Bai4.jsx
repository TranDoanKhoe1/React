import { useState } from "react";
import "../css/Bai4.css"; 

export default function Bai4() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput(""); 
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h2>To-Do List</h2>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Thêm công việc..."
            />
            <button onClick={addTask}>Thêm</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{index + 1}.
                        {task}
                        <button className="delete" onClick={() => removeTask(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
