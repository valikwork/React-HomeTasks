import React, { Component } from 'react'

export default class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    focusOnInput() {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
            <input ref={this.inputRef} type="text"/>
            <div>
                Input Component with complexity logic
            </div>
            </div>
        )
    }
}
