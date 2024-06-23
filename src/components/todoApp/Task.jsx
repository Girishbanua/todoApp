/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Task = ({title, description, deleteTask, index}) => {
  return (
    <div className='tasks'>
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button type="submit" id="delBtn" onClick={() => deleteTask(index)}>➖</button>
    </div>
  )
}

export default Task
