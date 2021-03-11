// Core
import { useMutation } from '@apollo/client';

// GraphQL
import CreateLessonSchema from '../schemas/createLesson.graphql';
import LessonsSchema from '../schemas/lessons.graphql';

// Types
import { Lessons, CreateLesson, CreateLessonVariables } from '../types';

export const useCreateLessonMutation = () => {
    return useMutation<CreateLesson, CreateLessonVariables>(CreateLessonSchema, {
        update(cache, { data }) {
            const { lessons } = cache.readQuery<Lessons>({
                query: LessonsSchema,
            })!;

            cache.writeQuery({
                query: LessonsSchema,
                data:  {
                    lessons: [ ...lessons, data!.createLesson ],
                },
            });
        },
    });
};
