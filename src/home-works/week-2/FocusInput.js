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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta consequuntur culpa, praesentium doloremque voluptate modi dolore quod ipsum magni at officia ducimus maxime. Consequatur molestiae assumenda ullam! Veniam, quaerat.
            </div>
        )
    }
}
