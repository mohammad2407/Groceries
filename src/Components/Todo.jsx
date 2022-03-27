import React from 'react'
import { TodoInput } from './TodoInput';
import {TodoList} from './TodoList';
import { v4 as uuid } from 'uuid';
import './grocery.css'
const Todo = () => {
const [data, setData] = React.useState([])
 
  const handleAdd=(title)=>{
    const payload ={
      title,
      status: false,
      id:uuid()
    }
    setData([...data, payload])
  }


 const handleToggle = (id) =>{
   const updatedData = data.map((item) =>
   (item.id === id ? {...item, status:!item.status}: item))
   setData(updatedData)
  }


  const handleDelete = (id) =>{
    const updatedData = data.filter((item) =>(item.id !== id))
    setData(updatedData)
  }
  console.log(data)  

  return (
    <>
      <TodoInput handleClick={handleAdd}/>
      
      <div>
      {
        data.map((item) => (
          <TodoList {...item} key ={item.id} handleToggle= { handleToggle}  handleDelete={handleDelete}/>
        ))
      }
      </div>
      
     
     
    </>
  )
}

export  default Todo

