import React from 'react'
// import { Litask } from './Litask'
import { Header } from './Header'
const Task = () => {

  let techs = [
    {
      title:"Mobile Operating System",
      items:["Android", "Blackberry", "iphone", "Windows Phone"]

    },

    {
      title:"Mobile Manufacturer",
      items:["Samsung", "HTC", "Micromax", "Apple"]

    }
    
  ]
 
  console.log(techs.items)


  return (
    <div>
    
      
       {techs.map((elements) => { return <Header {...elements}  /> })

        
       }
      
    </div>
  )
}

export {Task}
