import React from 'react'
import { Litask } from './Litask.jsx'
export const Header = ({title,items}) => {
    
  return (
      <>
      <h1>{title}</h1>
      <ul>
      {
            items.map((item) => <Litask value = {item}/>)
        }
      </ul>
        

      </>
    
    
  )
}
