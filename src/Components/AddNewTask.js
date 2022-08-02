import { clear } from '@testing-library/user-event/dist/clear'
import { useState } from 'react'

const AddNewTask = ({ addNew }) => {
    //default of empty string and false for reminder
    const [text, setText] = useState('')
    const [day, setDay] = useState('') 
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            alert('Please add a task')
            return
        }
        addNew({ text, day, reminder })
        clearForm()
    }
    const clearForm = () => {
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='user-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Enter Task' 
            value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder='Enter Day & Time'
            value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <div className='ending-with-saveTask'>
                <input id='actual-checkbox' type='checkbox'
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
                checked={reminder} />
                <input id='submit' type='submit' value='Save Task' />
            </div>
        </div>

    </form>
  )
}

export default AddNewTask