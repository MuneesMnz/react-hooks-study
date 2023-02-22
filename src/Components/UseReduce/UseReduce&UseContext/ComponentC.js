import React, { useContext } from 'react'
import { counterContext } from './ParentComponent'



export const ComponentC = () => {

    const countContext=useContext(counterContext)
  return ( 
    <div>
        <p>Component C -{countContext.counterState}</p>
         <button onClick={()=>countContext.Countdispatch('incriment')}>Incriment</button>
         <button onClick={()=>countContext.Countdispatch('decriment')}>Decriment</button>
         <button onClick={()=>countContext.Countdispatch('reset')}>Reset</button>
    </div>
  )
}

