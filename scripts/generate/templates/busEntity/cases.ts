// Types
import * as types from './types';

export const set__entityName__(pascalCase): types.Set__entityName__(pascalCase)Contract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};
