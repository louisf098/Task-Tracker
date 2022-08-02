import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/Tasks";
import AddNewTask from "./Components/AddNewTask"
import { useState, useEffect } from 'react'

function App() {

    const [showAddNewTask, setShowAddNewTask] = useState(false)

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const receivedTasks = await fetchTasks()
            setTasks(receivedTasks)
        }

        getTasks()
    }, [])

    const fetchTasks = async () => {
        const response = await fetch('http://localhost:5000/tasks')
        const data = await response.json()
        return data
    }

    const fetchTask = async (id) => {
        const response = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await response.json()
        return data
    }

    const setReminder = async (id) => {

        const toggleTask = await fetchTask(id)
        const updatedTask = { ...toggleTask, reminder: !toggleTask.reminder}
        const response = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify(updatedTask)
        })

        const data = await response.json()
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder } : task))
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
        
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = async (task) => {
        const response = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify(task)
        })
        const newData = await response.json()
        setTasks([...tasks, newData])
    }
  
    return (
        <div className="outside-container">
            <Navbar />
            <div className="container">
                <Header onAdd={() => setShowAddNewTask(!showAddNewTask)}
                showAddTask={showAddNewTask} />
                {showAddNewTask && <AddNewTask addNew={addTask}/>}
                <Tasks tasks={tasks} deleteTask={deleteTask}
                toggleReminder={setReminder} />
            </div>
        </div>
    );
}

export default App;
