import React, { useState } from 'react'

export const HookCounterThree = () => {

    const [name,setname]=useState({firstName:"",lastName:""})

  return (
    <form>
        <input type='text' placeholder='First Name' value={name.firstName} onChange={e=>setname({...name,firstName: e.target.value})} />
        <input type='text' placeholder='Last Name' value={name.lastName} onChange={e=>setname({...name,lastName: e.target.value})} />

        <h2>First name is {name.firstName }</h2>
        <h2>Last name is {name.lastName }</h2>
    </form>
  )
}
