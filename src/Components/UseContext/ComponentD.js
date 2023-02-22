import React, { useContext } from 'react'
import { JobContext, UserContext } from '../../App'
import { ComponentE } from './ComponentE'

export const ComponentD = () => {

    const user=useContext(UserContext)
    const job=useContext(JobContext)

  return (
    <div>

    <h2>{user}-{job[0]}</h2>
        {/* <ComponentE /> */}
    </div>
  )
}
