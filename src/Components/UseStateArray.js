import React, { useState } from 'react'

function UseStateArray() {

    const [item,setItem]=useState([])

    const AddNumber=()=>{
        setItem([...item,{
            id:item.length,
            number:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={AddNumber}>Add A Number</button>
        <ul>
            {
                item.map((value)=><li key={value.id}>{value.number}</li>)
            }
        </ul>
    </div>
  )
}

export default UseStateArray