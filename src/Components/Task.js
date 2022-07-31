import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className="task">
        <h8>{task.text}</h8>
        <FaTimes className="fatimes"/>
        <h6>{task.day}</h6>
    </div>
  )
}

export default Task