// Core
import React, { FC, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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

// Path
import { getPath_TESTS } from '../../routes/paths';

const Lessons: FC = () => {
    const { push } = useHistory();
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
                options = {{
                    title:      'Create lesson form',
                    buttonText: 'Create lesson',
                }}
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
                                }}
                                onClick = { () => void push(getPath_TESTS(_id)) }>
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
