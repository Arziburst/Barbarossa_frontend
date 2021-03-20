// Core
import React, { FC, useEffect, useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

// Containers
import { AppBarContainer } from '../containers/AppBar';
import { Routes } from '../routes';

// Hooks
import { useLocalStorage } from '../../tools/hooks';
import { useTogglersRedux } from '../../bus/client';

// Assets and Styles
import { GlobalStyles, defaultTheme, muiDefaultTheme } from '../../assets';
import { AppContainer, RoutesContainer } from './styles';

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <StyledThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme }>
            <MuiThemeProvider theme = { muiDefaultTheme }>
                <GlobalStyles />
                <AppContainer>
                    <AppBarContainer />
                    <RoutesContainer>
                        <Routes />
                    </RoutesContainer>
                </AppContainer>
            </MuiThemeProvider>
        </StyledThemeProvider>
    );
};
