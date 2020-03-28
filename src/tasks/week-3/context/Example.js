import React, { Component } from 'react'
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';
import Text from './Text';



export default class Example extends Component {
    state = {
        theme: 'light',
        email: 'email@gmail.com'
    }
    render() {
        return (
            <div className='context-example'>
                <button onClick={() => this.setState({ theme: 'light' })}>Light</button>
                <button onClick={() => this.setState({ theme: 'dark' })}>Dark</button>
               <ThemeContext.Provider value={this.state.theme}>
                   <UserContext.Provider value={this.state.email}>
                        <Text />
                   </UserContext.Provider>
               </ThemeContext.Provider>   
            </div>
        )
    }
}
