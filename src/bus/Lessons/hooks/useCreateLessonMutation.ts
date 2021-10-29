// Core
import { useMutation } from '@apollo/client';

// GraphQL
import CreateLessonSchema from '../schemas/createLesson.graphql';
import LessonsSchema from '../schemas/lessons.graphql';

// Types
import { Lessons, CreateLesson, CreateLessonVariables } from '../types';
import { OnMutationOptions } from '../../../init/@types/types';

export const useCreateLessonMutation = ({ onSuccess }: OnMutationOptions) => {
    return useMutation<CreateLesson, CreateLessonVariables>(CreateLessonSchema, {
        update(cache, { data }) {
            if (!data) {
                throw new Error('Test create failed');
            }

            try {
                const { lessons } = cache.readQuery<Lessons>({ query: LessonsSchema })!;

                cache.writeQuery({
                    query: LessonsSchema,
                    data:  {
                        lessons: [ ...lessons, data.createLesson ],
                    },
                });
            } catch (error) { } // eslint-disable-line no-empty

            onSuccess && onSuccess();
        },
    });
};
