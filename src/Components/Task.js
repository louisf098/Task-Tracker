import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleReminder }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => (toggleReminder(task.id))}>
            <h3>
                <span className="h3Text">{task.text}</span>
                <FaTimes className="fatimes"
                style={{ color: 'rgb(210, 43, 43)',
                height: "30px",
                width: '30px',
                minWidth: '30px'}} 
                onClick={() => deleteTask(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
