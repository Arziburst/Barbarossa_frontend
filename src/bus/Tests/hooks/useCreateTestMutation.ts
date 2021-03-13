// Core
import { useMutation } from '@apollo/client';

// GraphQL
import CreateTestSchema from '../schemas/createTest.graphql';
import TestsSchema from '../schemas/tests.graphql';
import LessonsSchema from '../../Lessons/schemas/lessons.graphql';

// Types
import { Lessons } from '../../Lessons/types';
import { Tests, TestCreate, TestCreateVariables } from '../types';

export const useCreateTestMutation = () => {
    return useMutation<TestCreate, TestCreateVariables>(CreateTestSchema, {
        update(cache, { data }) {
            if (!data) {
                throw new Error('Test create failed');
            }

            try {
                const { tests } = cache.readQuery<Tests>({ query: TestsSchema })!;

                cache.writeQuery({
                    query: TestsSchema,
                    data:  {
                        tests: [ ...tests, data.createTest.createdTest ],
                    },
                });
            } catch (error) { } // eslint-disable-line no-empty

            try {
                const { lessons } = cache.readQuery<Lessons>({ query: LessonsSchema })!;

                cache.writeQuery({
                    query: LessonsSchema,
                    data:  {
                        lessons: lessons.map((lesson) => {
                            if (lesson._id === data.createTest.updatedLesson._id) {
                                return data.createTest.updatedLesson;
                            }

                            return lesson;
                        }),
                    },
                });
            } catch (error) { } // eslint-disable-line no-empty
        },
    });
};
