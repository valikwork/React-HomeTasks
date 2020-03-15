import React, { Component } from 'react'

export default class Cube extends Component {
    state = {
        color: 'red'
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(state => {
                return {
                    color: state.color === 'red' ? 'green' : 'red'
                }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { color } = this.state;
        return (
            <div className={`cube ${color}`}>
                
            </div>
        )
    }
}
