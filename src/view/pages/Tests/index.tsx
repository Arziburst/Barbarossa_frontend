// Core
import React, { FC, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

// Apollo
import { useTestsOfLessonQuery, useCreateTestMutation } from '../../../bus/Tests';

// Components
import { ErrorBoundary, Modal } from '../../components';

// Elements
import { Spinner } from '../../elements';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import { Container } from './styles';

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
        <Container>
            <Button
                color = 'primary'
                variant = 'outlined'
                onClick = { () => goBack() }>
                Back
            </Button>
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
                        name = 'testNumber'
                        placeholder = 'testNumber'
                        type = 'number'
                        value = { form.testNumber }
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
                    data?.testsOfLesson.map(({ _id, title, description, testNumber }) => {
                        return (
                            <div
                                key = { _id }
                                style = {{
                                    margin:          10,
                                    padding:         5,
                                    backgroundColor: 'gray',
                                    color:           '#fff',
                                }}>
                                <p>testNumber: {testNumber}</p>
                                <p>title: {title}</p>
                                <p>description: {description}</p>
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
        <Tests />
    </ErrorBoundary>
);
