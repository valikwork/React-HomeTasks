import React, { useState } from 'react';


class Example1 extends React.Component {
    state = {
        name: 'John',
        counter: 0
    }
    changeName = (name) => {
        this.setState({ name })
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                Hello {this.state.name}
                <button onClick={() => this.changeName('Zoi')}>Change Name</button> 
                Count: {this.state.count} <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default function Example2 () {
    const [ name, setName ] = useState('John')
    const [ count, setCount ] = useState(0)
    return (
        <div>
            Hello {name} 
            <button onClick={() => setName('Zoi')}> Change Name</button> 
            Counter: {count} <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}


