// Core
import { useQuery } from '@apollo/client';

// GraphQL
import CatsSchema from '../schemas/cats.graphql';

// Types
import { Cats } from '../types';

export const useCatsQuery = () => {
    return useQuery<Cats>(CatsSchema);
};
