import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DataFetchingtwo = () => {

    const [user,setUser]=useState({})

    const [id,setId]=useState(1)

    const [idWithButton,SetIdWithButton] =useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${idWithButton}`)
        .then(res=>{
            console.log(res)
            setUser(res.data)
        })
        .catch(err=>console.log(err))
    },[idWithButton])

    const FetchWithButton =()=>{
        SetIdWithButton(id)
    }

  return (
    <div>
        <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
        <button type='button' onClick={FetchWithButton} >Fetch Data</button>
        <div>
            {
               user.name 
            }
        </div>
    </div>
  )
}
