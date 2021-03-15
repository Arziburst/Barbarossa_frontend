// Core
import { useMutation } from '@apollo/client';

// GraphQL
import UpdateTestSchema from '../schemas/updateTest.graphql';

// Types
import { UpdateTest, UpdateTestVariables } from '../types';

export const useUpdateTestMutation = () => {
    return useMutation<UpdateTest, UpdateTestVariables>(UpdateTestSchema);
};
