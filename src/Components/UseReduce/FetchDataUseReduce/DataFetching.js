import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DataFetching = () => {

    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch((err) => {
                setLoading(false)
                setPost({})
                setError('someThing Went Wrong')
            })
    }, [])

    return (
        <div>
            <h1>{loading ? "Data loading" : post.name}</h1>
            <p>{error ? error : ''}</p>
        </div>
    )
}
