import React from 'react'

const TodoList = ({title,id,status,handleToggle,handleDelete}) => {
  return (
    <div className='list-items'>
     <h1>{title}</h1>
     <h4>{status ? "Completed" : "Not Completed"}</h4>
    <button onClick={()=>handleToggle(id)}>Toggle Todo</button>
    <button onClick={()=>handleDelete(id)}>Delete</button>

    </div>
  )
}

export {TodoList}
