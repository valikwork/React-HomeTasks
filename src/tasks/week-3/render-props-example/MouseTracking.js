import React, { Component } from 'react'

export default class MouseTracking extends Component {
    state = {
        x: 0,
        y: 0,
    }
    trackMousePosition = e => {
        this.setState({ 
            x: e.pageX,
            y: e.pageY
         })
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.trackMousePosition)
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.trackMousePosition)
    }
    render() {
        const { x, y } = this.state;
        return (
            <div>
                {this.props.children(x, y)}
            </div>
        )
    }
}
