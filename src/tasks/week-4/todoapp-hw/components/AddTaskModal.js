import React, { useState, useCallback } from 'react'
import { Modal, Header, Icon, Dimmer, Loader } from 'semantic-ui-react';
import AddTodoForm from './AddTodoForm';
import TheamedButton from './TheamedButton';
import apiClient from '../api-client';

export default function AddTaskModal({ onAddTodo }) {
    const [ isModalDisplayed, toggleModal ] = useState(false);
    const closeModal = useCallback(() => toggleModal(false) ,[])
    const openModal = useCallback(() => toggleModal(true) ,[])

    const handleSubmit = useCallback(values => {
        return apiClient.post('/todos', values)
            .then(response => {
                onAddTodo(response.data)
                closeModal();
            })
    }, [onAddTodo, closeModal])

    return (
        <Modal
            open={isModalDisplayed}
            onClose={closeModal}
            onOpen={openModal}
            size='small'
            trigger={
                <TheamedButton icon labelPosition='right'>
                    Add Task
                    <Icon name='calendar plus outline' />
                </TheamedButton>
            }
        >
            <Header icon='calendar plus outline' content='Add New Task' />
            <Modal.Content>
                <AddTodoForm onCancel={closeModal} onSubmit={handleSubmit} />
            </Modal.Content>
    </Modal>
    )
}
