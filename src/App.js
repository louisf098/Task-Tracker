import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/Tasks";
import AddNewTask from "./Components/AddNewTask"
import { useState } from 'react'

function App() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Hi there',
            day: 'feb 5th',
            reminder: true,
        },
        {
            id: 2,
            text: 'byeeee',
            day: 'january 10th',
            reminder: false,
        },
        {
            id: 3,
            text: 'weeeeeeeeeeee',
            day: 'may 20th',
            reminder: false,
        },
        {
            id: 4,
            text: 'awooga',
            day: 'december 4th',
            reminder: false,
        },
        {
            id: 5,
            text: 'jed',
            day: 'i love ^',
            reminder: false,
        },
    ])

    const setReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 5
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }
  
    return (
        <div className="outside-container">
            <Navbar />
            <div className="container">
                <Header />
                <AddNewTask addNew={addTask}/>
                <Tasks tasks={tasks} deleteTask={deleteTask} 
                toggleReminder={setReminder} />
            </div>
        </div>
    );
}

export default App;
