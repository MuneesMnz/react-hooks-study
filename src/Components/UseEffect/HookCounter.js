import React, { useEffect, useState } from 'react'

export const HookCounter = () => {

    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('Use Effect Title Changed');
        document.title=`you clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>setCount(count +1)}>Click {count}</button>
    </div>
  )
}
