// Core
import { useQuery } from '@apollo/client';

// GraphQL
import TestsSchema from '../schemas/tests.graphql';

// Types
import { Tests } from '../types';

export const useTestsQuery = () => {
    return useQuery<Tests>(TestsSchema);
};
