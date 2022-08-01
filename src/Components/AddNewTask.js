import React from 'react'

const AddNewTask = () => {
  return (
    <form className='user-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Enter Task' />
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder='Enter Day & Time' />
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <div className='ending-with-saveTask'>
                <input id='actual-checkbox' type='checkbox' />
                <input id='submit' type='submit' value='Save Task' />
            </div>
        </div>

    </form>
  )
}

export default AddNewTask