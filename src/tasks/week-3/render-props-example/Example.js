import React, { Component } from 'react'
import MouseTracking from './MouseTracking'
import Circle from './Circle'

export default class Example extends Component {
    render() {
        return (
            <div>
                <MouseTracking>
                    {(x, y) => <Circle x={x} y={y} />}
                </MouseTracking>
            </div>
        )
    }
}
