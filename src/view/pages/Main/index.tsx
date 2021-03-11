// Core
import React, { FC } from 'react';

// Redux
import { useCatsQuery } from '../../../bus/Cats';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    const { data } = useCatsQuery();
    console.log('🚀 ~ file: index.tsx ~ line 15 ~ data', data);

    return (
        <Container>
            Main
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
