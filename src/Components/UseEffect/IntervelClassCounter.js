import React, { Component } from 'react'

export default class IntervelClassCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }



    incriment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        this.intervel = setInterval(() => {
            this.incriment()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervel)
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}
