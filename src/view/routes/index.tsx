// Core
import React, { FC, Suspense } from 'react';

// Routes
// import { Public } from './Public';
import { Private } from './Private';

// Redux
// import { useTogglersRedux } from '../../../.init/redux/togglers';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    return (
        <Suspense fallback = { <Spinner /> }>
            <Private />
            {/* {
                isLoggedIn
                    ? <Private />
                    : <Public />
            } */}
        </Suspense>
    );
};
