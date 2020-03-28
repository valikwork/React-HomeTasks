import React, { useState, useCallback, useContext } from 'react'
import classNames from 'classnames'
import { List, Icon, Dimmer, Loader } from 'semantic-ui-react';
import apiClient from '../api-client';
import ThemeContext from '../contexts/ThemeContext';
import TheamedButton from './TheamedButton'

export default function TodoItem({ todo, onRemoveTodo, onToggleCompletion }) {
    const [isProcessing, setIsProcessing] = useState(false);
    const { theme } = useContext(ThemeContext)

    const toggleCompletion = useCallback(() => {
        setIsProcessing(true)
        apiClient.patch(`/todos/${todo.id}`, { completed: !todo.completed })
            .then(response => {
                setIsProcessing(false);
                onToggleCompletion({ ...todo, ...response.data });
            })
        }, [todo, onToggleCompletion])

    const removeTodo = useCallback(() => {
        setIsProcessing(true);
        apiClient.delete(`/todos/${todo.id}`).then(() => {
                setIsProcessing(false);
                onRemoveTodo(todo.id);
            })
        }, [todo, onRemoveTodo])
    return (
        <List.Item className={classNames('todo-item', theme)}>
            <Dimmer active={isProcessing} inverted>
                <Loader size='small' />
            </Dimmer>
            <List.Content verticalAlign='middle' floated='right'>
                <TheamedButton basic onClick={removeTodo} icon><Icon name='trash' /></TheamedButton>
            </List.Content>
            <Icon className={classNames({ hidden: !todo.completed })} size='large' name='check circle outline' />
            <List.Content as='a' onClick={toggleCompletion}>{todo.title}</List.Content>
        </List.Item>
    )
}
