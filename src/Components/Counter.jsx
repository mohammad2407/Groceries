import React from 'react'

const Counter = () => {
    const[count,setCount] = React.useState(0)

   

  return (
    <>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Add</button>
        <button onClick={()=>setCount(count-1)}>Sub</button>



    </>
  )
}

export {Counter}
