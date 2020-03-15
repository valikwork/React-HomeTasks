import React, { Component } from 'react'

export default class ValidatedInput extends Component {

    state = {
        'error': '',
        touched: false
    }

    componentDidMount() {
        this.validate();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.validate()
        }
    }

    validate() {
        const error = this.props.validate(this.props.value)
        this.setState({ error })
    }

    touchInput = () => {
        this.setState({ touched: true });
    }

    render() {
        const { validate, ...rest } = this.props;
        const { error, touched } = this.state;
        return (
            <div className='validated-input'>
                <input {...rest} onBlur={this.touchInput} />
                {error && touched && <div className='error'>{error}</div> }
            </div>
        )
    }
}
