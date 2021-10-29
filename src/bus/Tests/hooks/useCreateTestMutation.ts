// Core
import { useMutation } from '@apollo/client';

// GraphQL
import TestsOfLessonSchema from '../schemas/testsOfLesson.graphql';
import CreateTestSchema from '../schemas/createTest.graphql';
import LessonsSchema from '../../Lessons/schemas/lessons.graphql';

// Types
import { Lessons } from '../../Lessons/types';
import { TestsOfLesson, TestsOfLessonVariables, TestCreate, TestCreateVariables } from '../types';
import { OnMutationOptions } from '../../../init/@types/types';

interface Options extends OnMutationOptions {
    lessonId: string
}

export const useCreateTestMutation = ({ onSuccess, lessonId }: Options) => {
    return useMutation<TestCreate, TestCreateVariables>(CreateTestSchema, {
        update(cache, { data }) {
            if (!data) {
                throw new Error('Test create failed');
            }

            try {
                const localQueryOptions = {
                    query:     TestsOfLessonSchema,
                    variables: { input: { lessonId }},
                };
                const { testsOfLesson } = cache.readQuery<TestsOfLesson, TestsOfLessonVariables>(localQueryOptions)!;

                cache.writeQuery<TestsOfLesson, TestsOfLessonVariables>({
                    ...localQueryOptions,
                    data: {
                        testsOfLesson: [ ...testsOfLesson, data.createTest.createdTest ],
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

            onSuccess && onSuccess();
        },
    });
};
