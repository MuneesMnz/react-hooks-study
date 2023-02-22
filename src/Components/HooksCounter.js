import React, { useState } from 'react'

function HooksCounter() {

    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>incriment</button>
        </div>
    )
}

export default HooksCounter