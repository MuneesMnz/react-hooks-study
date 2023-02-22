import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Datafetching = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setPost(res.data); 
                console.log(res);
            })
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            <ul>
                {
                    post.map((value) => <li key={value.id}>{value.name}</li>)
                }
            </ul>
        </div>
    )
}
