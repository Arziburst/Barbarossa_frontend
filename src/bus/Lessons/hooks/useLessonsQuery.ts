// Core
import { useQuery } from '@apollo/client';

// GraphQL
import LessonsSchema from '../schemas/lessons.graphql';

// Types
import { Lessons } from '../types';

export const useLessonsQuery = () => {
    return useQuery<Lessons>(LessonsSchema);
};
