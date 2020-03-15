import React, { Component } from 'react'

export default class InputControl extends Component {
    state = {
        error: '',
        touched: false
    }

    validate() {
        const error = this.props.validate(this.props.value);
        this.setState({ error })
    }

    componentDidMount() {
        this.validate()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.validate()
        }
    }
    render() {
        return (
            <div className='input-control'>
                <input onBlur={() => this.setState({ touched: true })} {...this.props}/>
                {this.state.touched && <div className="error">{this.state.error}</div> }
            </div>
        )
    }
}
