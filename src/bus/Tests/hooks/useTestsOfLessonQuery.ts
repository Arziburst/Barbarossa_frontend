// Core
import { useQuery } from '@apollo/client';

// GraphQL
import TestsOfLessonSchema from '../schemas/testsOfLesson.graphql';

// Types
import { TestsOfLesson, TestsOfLessonVariables } from '../types';

export const useTestsOfLessonQuery = (lessonId: string) => {
    return useQuery<TestsOfLesson, TestsOfLessonVariables>(TestsOfLessonSchema, {
        variables: { input: { lessonId }},
    });
};
