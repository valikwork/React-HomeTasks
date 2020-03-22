import React, { Component } from 'react'
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';
import './styles.css';

export default class Button extends Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context;
        return (
            <div className='btn' style={{ color: theme === 'light' ? 'black' : 'white', backgroundColor: theme === 'light' ? 'lightgrey' : 'black' }}>
                Click Me 
            </div>   
        )
    }
}
