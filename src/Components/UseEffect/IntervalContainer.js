import React, { useState } from 'react'
import IntervelClassCounter from './IntervelClassCounter';
import { IntervelHookCounter } from './IntervelHookCounter';

function IntervalContainer() {

    const [display,setDisplay]=useState(true);

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle</button>
        {display && <IntervelClassCounter />}
        <div>
            <IntervelHookCounter />
        </div>
    </div>
  )
}

export default IntervalContainer