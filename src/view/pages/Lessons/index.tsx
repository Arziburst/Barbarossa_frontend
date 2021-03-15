// Core
import React, { FC } from 'react';

// Apollo
import { useLessonsQuery/* , useCreateLessonMutation */ } from '../../../bus/Lessons';

// Components
import { ErrorBoundary, Modal } from '../../components';

// Elements
import { Spinner } from '../../elements';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import { Container } from './styles';
// import { OnMutationHanlerType } from '../../../@types/types';

const Lessons: FC = () => {
    const { data, loading } = useLessonsQuery();
    // const [ createLesson ] = useCreateLessonMutation();
    const [ form, setForm ] = useForm({
        lessonNumber: '',
        description:  '',
        title:        '',
    });

    if (loading) {
        return <Spinner />;
    }

    // const onSubmitHandler: OnMutationHanlerType = (payload) => void createLesson({
    //     variables: { input: {
    //         ...form,
    //         lessonNumber: parseInt(form.lessonNumber, 10),
    //     }},
    // });

    return (
        <Container>
            <Modal
                title = 'Создание урока,'
                onMutationSubmit = { () => void 0 }>
                <div style = {{
                    display:       'flex',
                    flexDirection: 'column',
                }}>
                    <input
                        name = 'lessonNumber'
                        placeholder = 'lessonNumber'
                        type = 'number'
                        value = { form.lessonNumber }
                        onChange = { (event) => setForm(event, true) }
                    />
                    <input
                        name = 'title'
                        placeholder = 'title'
                        value = { form.title }
                        onChange = { setForm }
                    />
                    <input
                        name = 'description'
                        placeholder = 'description'
                        value = { form.description }
                        onChange = { setForm }
                    />
                </div>
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
