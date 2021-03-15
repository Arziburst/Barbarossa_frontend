// Core
import React, { FC, useState } from 'react';
import { TextField } from '@material-ui/core';

// Apollo
import { useLessonsQuery, useCreateLessonMutation } from '../../../bus/Lessons';

// Components
import { ErrorBoundary, Modal } from '../../components';

// Elements
import { Spinner } from '../../elements';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import { Container } from './styles';

const Lessons: FC = () => {
    const [ isOpen, setOpen ] = useState(false);
    const [ form, setForm,, resetForm ] = useForm({
        lessonNumber: '',
        description:  '',
        title:        '',
    });

    const { data, loading } = useLessonsQuery();
    const [ createLesson ] = useCreateLessonMutation({
        onSuccess: () => {
            setOpen(false);
            resetForm();
        },
    });

    if (loading) {
        return <Spinner />;
    }

    const onSubmit = () => void createLesson({
        variables: { input: {
            ...form,
            lessonNumber: parseInt(form.lessonNumber, 10),
        }},
    });

    return (
        <Container>
            <Modal
                modalState = { [ isOpen, setOpen ] }
                title = 'Create lesson form'
                onSubmit = { onSubmit }>
                <section style = {{
                    display:       'flex',
                    flexDirection: 'column',
                }}>
                    <TextField
                        name = 'lessonNumber'
                        placeholder = 'lessonNumber'
                        type = 'number'
                        value = { form.lessonNumber }
                        onChange = { (event) => setForm(event, true) }
                    />
                    <TextField
                        name = 'title'
                        placeholder = 'title'
                        value = { form.title }
                        onChange = { setForm }
                    />
                    <TextField
                        name = 'description'
                        placeholder = 'description'
                        value = { form.description }
                        onChange = { setForm }
                    />
                </section>
            </Modal>

            <section>
                {
                    data?.lessons.map(({ _id, lessonNumber, title, description, tests }) => {
                        return (
                            <div
                                key = { _id }
                                style = {{
                                    margin:          10,
                                    padding:         5,
                                    backgroundColor: 'gray',
                                    color:           '#fff',
                                }}>
                                <p>lessonNumber: {lessonNumber}</p>
                                <p>title: {title}</p>
                                <p>description: {description}</p>
                                <p>tests: {tests.length}</p>
                            </div>
                        );
                    })
                }
            </section>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lessons />
    </ErrorBoundary>
);
