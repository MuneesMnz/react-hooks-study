import React, { useState } from 'react'
import { MouseMoveHook } from './MouseMoveHook'

export const MouseContainer = () => {

  const [dispaly,setDisplay]=useState(true)
  return (
    <div>
      <p>hello world</p>
      <button onClick={()=>setDisplay(!dispaly)}>Toggle Button</button>
      {dispaly && <MouseMoveHook/>}
      
    </div>
  )
}

