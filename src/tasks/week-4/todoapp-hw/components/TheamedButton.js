import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import { Button } from 'semantic-ui-react'

export default function TheamedButton({ children, ...rest }) {
    const { theme } = useContext(ThemeContext)
    return (
        <Button inverted={theme === 'dark'} {...rest}>
            {children}
        </Button>
    )
}