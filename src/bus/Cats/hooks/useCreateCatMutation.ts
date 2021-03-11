// Core
import { useMutation } from '@apollo/client';

// GraphQL
import CreateCatSchema from '../schemas/createCat.graphql';
import CatsSchema from '../schemas/cats.graphql';

// Types
import { Cats, CreateCat, CreateCatVariables } from '../types';

export const useCreateCatMutation = () => {
    return useMutation<CreateCat, CreateCatVariables>(CreateCatSchema, {
        onCompleted: () => {
            console.log('Cat was born¶÷');
        },
        update(cache, { data }) {
            const { cats } = cache.readQuery<Cats>({
                query: CatsSchema,
            })!;
            console.log(cats);


            cache.writeQuery({
                query: CatsSchema,
                data:  {
                    cats: [ data!.createCat, ...cats ],
                    // TODO: Новая локация при создании должна попадать в начало массива
                },
            });
        },
    });
};
