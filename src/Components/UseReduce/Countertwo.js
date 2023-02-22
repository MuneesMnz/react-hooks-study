import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'incriment':
            return {...state, firstCounter: state.firstCounter + action.value }
        case 'decriment':
            return {...state, firstCounter: state.firstCounter - action.value }
        case 'incriment5':
            return {...state, firstCounter: state.firstCounter + action.value }
        case 'decriment5':
            return {...state, firstCounter: state.firstCounter - action.value }
        case 'incrimentsecond':
            return {...state, secondCounter: state.secondCounter + action.value }
        case 'decrimentsecond':
            return {...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState


    }

}

const Countertwo = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <p>First Counter -{count.firstCounter}</p>
                <p>Second Counter - {count.secondCounter}</p>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'incriment', value: 1 })}>Incriment First</button>
                <button onClick={() => dispatch({ type: 'decriment', value: 1 })}>Decriment First</button>
                <button onClick={() => dispatch({ type: 'incriment5', value: 5 })}>Incriment First 5</button>
                <button onClick={() => dispatch({ type: 'decriment5', value: 5 })}>Decriment First 5</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'incrimentsecond', value: 2 })}>Incriment Second</button>
                <button onClick={() => dispatch({ type: 'decrimentsecond', value: 2 })}>Decriment Second</button>
            </div>
        </div>
    )
}

export default Countertwo