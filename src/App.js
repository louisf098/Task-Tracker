import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/Tasks";
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
            text: 'weeee',
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
        }
    ])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
  
    return (
        <div className="outside-container">
            <Navbar />
            <div className="container">
                <Header />
                <Tasks tasks={tasks} deleteTask={deleteTask} />
            </div>
        </div>
    );
}

export default App;
