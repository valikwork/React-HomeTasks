import React, { Component } from 'react'
import Button from './Button'
import ThemeContext from './ThemeContext'

export default class Text extends Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context;
        return (
            <div className={theme}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam odio deserunt magnam ut voluptatum, dolores autem, temporibus doloribus aspernatur quam natus rem perspiciatis iure tempore quisquam ducimus pariatur deleniti distinctio!
                <Button />
            </div>
        )
    }
}
