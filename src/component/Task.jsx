import React from 'react'

function Task({title, descripation,DeleteTask,index ,tasks}) {
  return (
    <div className='task'>
      <div>
        <p>{title}</p>
        <span>{descripation}</span>
      </div>
      <button className="ho" onClick={()=>DeleteTask(index)} >-</button>
    </div>
  )
}
export default Task
