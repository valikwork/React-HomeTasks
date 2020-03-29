import React from 'react'
import { useFormik } from 'formik';
import { Form, Button, Input, Select, Icon } from 'semantic-ui-react';
import useUsers from '../hooks/useUsers'

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors['title'] = 'Task title is required'
    }
    if (!values.userId) {
        errors['userId'] = 'Please assign user to task'
    }
    return errors
}

const getError = (formik, name) => formik.touched[name] && formik.errors[name] && ({
    content: formik.errors[name],
    pointing: 'below',
})

export default function AddTodoForm({ onSubmit, onCancel }) {
    const [ users ] = useUsers()
    const formik = useFormik({
        initialValues: {
          title: '',
          userId: '',
          completed: false
        },
        validate,
        validateOnBlur: true,
        onSubmit
      });
     const userOptions = users.map(u => ({ text: u.email, value: u.id })) 
     const { isSubmitting } = formik;
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Field
                placeholder='Walk the dog'
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                control={Input}
                name='title'
                label='Task title' 
                error={getError(formik, 'title')}
                />
            <Form.Field
                id='userId'
                selectOnBlur={false}
                label='User'
                control={Select}
                placeholder='John@gmail.com'
                fluid
                onBlur={formik.handleBlur}
                options={userOptions}
                onChange={(e, data) => formik.setFieldValue('userId', data.value)}
                error={getError(formik, 'userId')}>
            </Form.Field>
            
            <Button basic onClick={onCancel} >Cancel</Button>
            <Button disabled={isSubmitting} type='submit' color='green' inverted>
                <Icon loading={isSubmitting} name={isSubmitting ? 'asterisk' : 'checkmark'} /> Create Task
            </Button>
        </Form>
    )
}
