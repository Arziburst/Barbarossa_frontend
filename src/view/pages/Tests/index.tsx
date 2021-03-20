// Core
import React, { FC, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TextField, Typography, Link } from '@material-ui/core';

// Apollo
import { useTestsOfLessonQuery, useCreateTestMutation } from '../../../bus/Tests';

// Components
import { ErrorBoundary, Modal } from '../../components';
import { LearningEntityCard } from '../../components';

// Elements
import { Spinner } from '../../elements';

// Hooks
import { useForm } from '../../../tools/hooks';

const Tests: FC = () => {
    const { goBack } = useHistory();
    const { lessonId } = useParams<{lessonId: string}>();

    const [ isOpen, setOpen ] = useState(false);
    const [ form, setForm,, resetForm ] = useForm({
        testNumber:  '',
        description: '',
        title:       '',
    });

    const { data, loading } = useTestsOfLessonQuery(lessonId);
    const [ createTest ] = useCreateTestMutation({
        lessonId,
        onSuccess: () => {
            setOpen(false);
            resetForm();
        },
    });


    if (loading) {
        return <Spinner />;
    }

    const onSubmitHandler = () => void createTest({ variables: { input: {
        ...form,
        testNumber: parseInt(form.testNumber, 10),
        lessonId,
    }}});

    return (
        <div>
            <Link
                className = 'd-block mb-3'
                component = 'button'
                variant = 'body1'
                onClick = { (event: React.SyntheticEvent) => {
                    event.preventDefault();
                    goBack();
                } }>
                &#8592; Go back
            </Link>
            <Modal
                modalState = { [ isOpen, setOpen ] }
                options = {{
                    title:      'Create test form',
                    buttonText: 'Create test',
                }}
                onSubmit = { onSubmitHandler }>
                <section style = {{
                    display:       'flex',
                    flexDirection: 'column',
                }}>
                    <TextField
                        className = 'mb-3'
                        name = 'testNumber'
                        placeholder = 'Test number'
                        type = 'number'
                        value = { form.testNumber }
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
                    data?.testsOfLesson?.length
                        ? data?.testsOfLesson.map((test) => {
                            return (
                                <LearningEntityCard entityData = { test } />
                            );
                        })
                        : (
                            <Typography variant = 'body1'>There are no tests yet</Typography>
                        )
                }
            </section>
        </div>
    );
};

export default () => (
    <ErrorBoundary>
        <Tests />
    </ErrorBoundary>
);
