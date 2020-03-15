import React, { Component } from 'react'
import FocusInput from './FocusInput.js';

export default class AutoFocusInput extends Component {
    constructor(props) {
        super(props);
        this.focusInput = React.createRef();
    }
    componentDidMount() {
        this.focusInput.current.focusOnInput();
    }
    render() {
        return (
            <FocusInput ref={this.focusInput} />
        )
    }
}
