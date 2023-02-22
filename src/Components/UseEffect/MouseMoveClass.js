import React, { Component } from 'react'

export default class MouseMoveClass extends Component {

  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
    }
  }

  LogmousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.LogmousePosition)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.LogmousePosition)
  }
  render() {
    return (
      <div>
        X -{this.state.x} , Y -{this.state.y}
      </div>
    )
  }
}
