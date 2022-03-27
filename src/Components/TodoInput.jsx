import React from 'react'

export const TodoInput = ({handleClick}) => {
    const [title,setTitle] = React.useState("")

  
  return (
    <div className='input-list'>
      <h3>Enter the Groceries to the list</h3>
        <input 
        placeholder='Enter Todo' 
        value={title}
        onChange = {(e) =>setTitle(e.target.value)}
        />
    <button onClick={() => handleClick(title)}>Add</button>

      <h3>List Items</h3>
    </div>
  )
}
