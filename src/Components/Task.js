import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleReminder }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onClick={() => (toggleReminder(task.id))}>
            <h3>
                {task.text}
                <FaTimes className="fatimes"
                style={{ color: 'rgb(210, 43, 43)',
                fontSize: "30px"}} 
                onClick={() => deleteTask(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
