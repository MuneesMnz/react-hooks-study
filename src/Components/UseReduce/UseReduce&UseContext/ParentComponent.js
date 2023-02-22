import React, { useContext, useReducer } from 'react';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
    case 'incriment':
        return state + 1;
    case 'decriment' :
        return state - 1;
    case 'reset' :
        return initialState
    }
}
export const counterContext = React.createContext()

export const ParentComponent = () => {

    const [counter, dispatch] = useReducer(reducer, initialState)


    return (
        <counterContext.Provider value={{ counterState: counter, Countdispatch: dispatch }}>
            <div>
                <h1>{counter}</h1>
                <ComponentA />
                <ComponentB />
            </div>
        </counterContext.Provider>
    )
}
