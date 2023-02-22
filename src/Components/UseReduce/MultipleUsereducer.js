import React, { useReducer } from 'react'

// const initilalState = 0
// const reducer = (state, action) => {
//     switch (action) {
//         case 'abc':
//             return  state="Munees";
//         case 'mnz':
//             return state="Muhammed munees";
//         default:
//             return "enter a right Key"
//     }
// }

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'incriment':
            return state + 1;
        case 'decriment':
            return state - 1;
        case 'reset':
            return initialState
    }

}

const initTwo = "hello world";

const reducertwo = (state, action) => {
    switch (action) {
        case "mnz":
            return state = "its Mnz"
            break;

        default:
            break;
    }
}
const abc = (inpValue) => {
    console.log(inpValue)
}





export const MultipleUsereducer = () => {

    // const [counterone, dispatchone] = useReducer(reducer, initilalState)
    const [counterone, dispatchone] = useReducer(reducer, initialState)

    const [counterTwo, dispatchTwo] = useReducer(reducertwo, initTwo)
    return (

        <div>
            <div>
                <p>Counter One -{counterone}</p>
                <button onClick={() => dispatchone('incriment')}>Incriment</button>
                <button onClick={() => dispatchone('decriment')}>Decriment</button>
                <button onClick={() => dispatchone('reset')}>reset</button>
            </div>

            <div>
                <input type='text' onChange={e=>dispatchTwo(e.target.value)} />
                <p>{counterTwo}</p>
            </div>
        </div>
        // <div>
        //     <input type='text'  onChange={(e) => dispatchone(e.target.value)} />
        //     <p>{counterone}</p>
        // </div>
    )
}
