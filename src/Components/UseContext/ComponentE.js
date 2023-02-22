import React from 'react'
import { JobContext, UserContext } from '../../App'


export const ComponentE = () => {
    return (
        <div>
            <UserContext.Consumer>
                {user => {

                    // return (
                    //     <div>hello {user}</div>
                    // )
                    return (
                        <JobContext.Consumer >
                            {job => {
                                return (
                                    <h2>Hello {user} You are a {job[0]}</h2>
                                )
                            }}
                        </JobContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}
