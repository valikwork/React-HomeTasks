import { useEffect, useState, useCallback } from 'react'
import apiClient from '../api-client';

export default function useTodos() {
    const [ todos, setTodos ] = useState([]);
    const [ isFetching, setFetching ] = useState(false);

    useEffect(() => {
        setFetching(true)
        apiClient.get('/todos')
          .then(response => {
              setTodos(response.data) 
              setFetching(false)
          })
      }, []);

      const handleRemoveTodo = useCallback(id => setTodos(todos.filter(todo => todo.id !== id)), [todos])
      const handleToggleComplition = useCallback(updatedTodo =>
          setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)),
       [todos])
       const handleAddTodo = useCallback(newTodo => {
           setTodos([{ ...newTodo, id: Date.now() }, ...todos])
       }, [todos])


      return {todos, isFetching, handleRemoveTodo, handleToggleComplition, handleAddTodo };
}