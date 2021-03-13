import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        // flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const AppBarContainer = () => {
    const classes = useStyles();

    return (
        <div className = { classes.root }>
            <AppBar position = 'static'>
                <Toolbar>
                    <IconButton
                        aria-label = 'menu'
                        className = { classes.menuButton }
                        color = 'inherit'
                        edge = 'start'>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        className = { classes.title }
                        variant = 'h6'>
                        Lessons
                    </Typography>
                    <Button color = 'inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
