import React, { useState, useCallback } from 'react'
import { Modal, Header, Icon } from 'semantic-ui-react';
import AddTodoForm from './AddTodoForm';
import TheamedButton from './TheamedButton';
import apiClient from '../api-client';

export default function AddTaskModal({ onAddTodo }) {
    const [ isModalDisplayed, toggleModal ] = useState(false);
    const [ isSubmitting, setSubmitting ] = useState(false);
    const closeModal = useCallback(() => toggleModal(false) ,[])
    const openModal = useCallback(() => toggleModal(true) ,[])

    const handleSubmit = useCallback(values => {
        setSubmitting(true);
        return apiClient.post('/todos', values)
            .then(response => {
                console.log(response.data);
                setSubmitting(false);
                onAddTodo(response.data)
                closeModal();
            })
    }, [onAddTodo, closeModal])

    return (
        <Modal
            loading={isSubmitting}
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
