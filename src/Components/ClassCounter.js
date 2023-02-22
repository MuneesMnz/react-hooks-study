import React, { Component } from 'react'

export class ClassCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrimentcount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                
                <button onClick={this.incrimentcount}>incriment</button>
            </div>
        )
    }
}

export default ClassCounter