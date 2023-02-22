import React, { useEffect, useState } from 'react'

export const MouseMoveHook = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const MousePositionLog = e => {
    console.log("mouse Moving");
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('helllo');
    window.addEventListener('mousemove', MousePositionLog)

    return () => {
      console.log('component removed')
      window.removeEventListener('mousemove', MousePositionLog)
    }
  }, [])

  return (
    <div>
      X- {x} ,Y -{y}
    </div>
  )
}
