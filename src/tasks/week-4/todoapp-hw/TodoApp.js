import React, { useState } from 'react'
import ThemeContext from './contexts/ThemeContext'
import TodoList from './components/TodoList'
import 'semantic-ui-css/semantic.min.css'
import './todo-list.css'

export default function TodoApp() {
    const [theme, setTheme] = useState('light');
    const context = {
        theme,
        toggleTheme: () => setTheme(theme === 'light' ? 'dark': 'light')
    }
    return (
        <ThemeContext.Provider value={context}>
            <TodoList />
        </ThemeContext.Provider>
    )
}
