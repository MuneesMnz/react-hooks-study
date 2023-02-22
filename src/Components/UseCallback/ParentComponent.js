import React, { useState } from 'react'
import { Button } from './Button'
import { Count } from './Count'
import Title from './Title'

export const ParentComponent = () => {

    const [age,setAge]=useState(24)
    const [salary,setSalary]=useState(20000)

    const IncrimentAge =()=>{
        setAge(age +1)
    }
    const IncrimentSalary =()=>{
        setSalary(salary +2000)
    }

  return (
    <div>
        <Title />
        <Count text='Age' count={age} />
        <Button handleFunction={IncrimentAge} > Incriment Age </Button>
        <Count text='Salary' count={salary} />
        <Button handleFunction={IncrimentSalary} > Incriment Salary </Button>
    </div>
  )
}
