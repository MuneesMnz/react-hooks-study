import React, { useReducer } from 'react';

const initialState=0;

const reducer=(state,action)=>{
    switch (action) {
        case 'incriment':
            return state +1
            break;
        case 'decriment':
            return state -1
            break;
        case 'reset':
            return initialState
            break;
        default:
            return state
            break;
    }
}

function Counterone() {

    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <p>Counter - {count}</p>
        <button onClick={()=>dispatch('incriment')}>Incriment</button>
        <button onClick={()=>dispatch('decriment')}>Decriment</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Counterone