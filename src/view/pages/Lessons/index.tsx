// Core
import React, { FC, useState } from 'react';
import { TextField } from '@material-ui/core';

// Apollo
import { useLessonsQuery, useCreateLessonMutation } from '../../../bus/Lessons';

// Components
import { ErrorBoundary, Modal } from '../../components';
import { LearningEntityCard } from '../../components';

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
                        className = 'mb-3'
                        name = 'lessonNumber'
                        placeholder = 'Lesson number'
                        type = 'number'
                        value = { form.lessonNumber }
                        onChange = { (event) => setForm(event, true) }
                    />
                    <TextField
                        className = 'mb-3'
                        name = 'title'
                        placeholder = 'Title'
                        value = { form.title }
                        onChange = { setForm }
                    />
                    <TextField
                        className = 'mb-3'
                        name = 'description'
                        placeholder = 'Description'
                        value = { form.description }
                        onChange = { setForm }
                    />
                </section>
            </Modal>
            <section>
                {
                    data?.lessons.map((lesson) => {
                        return (
                            <LearningEntityCard
                                entityData = { lesson }
                                key = { lesson._id }
                            />
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
