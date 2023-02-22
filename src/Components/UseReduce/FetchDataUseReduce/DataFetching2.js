import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Fetching_completed':
            return {
                loading: false,
                error: '',
                post: action.payloads
            }
        case 'Fetching_Failed':
            return {
                loading: false,
                error: "Some thing wrong",
                post :{}
            }
    }
}

export const DataFetching2 = () => {

    const [state,dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/2')
        .then((res)=>{
            dispatch({type:'Fetching_completed',payloads:res.data})
        }).catch((err)=>{
            dispatch({type:'Fetching_Failed'})
        })
    },[])

    return (
        <div>
            <h1>{state.loading ? 'Data Loadng ':state.post.name }</h1>
            <h3>{state.error ? state.error :'' }</h3>
        </div>
    )
}
