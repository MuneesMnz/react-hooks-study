import React from 'react'

export const Count = ({text,count}) => {
    console.log(`Rendering ${text}`);
  return (
    <div>
        <h3>{text} - {count}</h3>
    </div>
  )
}
