import React, { Component } from 'react'
import Draggable from './Draggable'
import Circle from './Circle'

export default class Example extends Component {
    render() {
        return (
            <div>
                <Draggable>
                    <Circle />
                    {/* <img draggable={false} src="https://pbs.twimg.com/profile_images/378800000249743035/d906c6416338d535b9c17be0576224ba.png" alt=""/> */}
                </Draggable>
            </div>
        )
    }
}
