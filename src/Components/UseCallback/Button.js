import React from 'react'

export const Button = ({handleFunction,children}) => {
    console.log(`rendering Button - ${children}`);
  return (
    <div>
        <button onClick={handleFunction}>
            {children}
        </button>
    </div>
  )
}
