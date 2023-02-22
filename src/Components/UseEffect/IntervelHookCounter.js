import React, { useEffect, useState } from 'react'

export const IntervelHookCounter = () => {

    const [counter, setCounter] = useState(0)

    const conterFun = () => {

        setCounter(count=>count + 1)

    }

    useEffect(()=>{
        let Intervel=setInterval(conterFun,1000)

        return ()=>{
            clearInterval(Intervel)
        }
    },[])

    return (
        <div>
            <h2>{counter}</h2>
        </div>
    )
}
