import React, { useState } from 'react'

export const HookCounterTwo = () => {

    const counter=0;

    const [count,setCount]=useState(counter)

    const incrimentFive=()=>{
        for(let i=0;i<5;i++){
            setCount((prevCount)=>prevCount + 1)
        }
    }

  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(counter)}>Reset</button>
        <button onClick={()=>setCount(pre=>pre + 1)}>Incriment</button>
        <button onClick={()=>setCount(cou=>cou - 1)}>Decriment</button>
        <button onClick={incrimentFive}>Incriment 5</button>
    </div>
  )
}
