// Core
import React, { FC } from 'react';
import { Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

// Components
import { Transition } from './Transition';

// Types
type PropTypes = {
    options: {
        title: string
        buttonText: string
    },
    onSubmit: Function
    modalState: [ boolean, React.Dispatch<React.SetStateAction<boolean>>]
    // width: number | string,
}

// Styles
import { CreateLessonButton } from './styles';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
    iconLarge: {
        width:  '2.8rem',
        height: '2.8rem',
    },
}));

export const Modal: FC<PropTypes> = ({
    children,
    onSubmit,
    modalState,
    options,
}) => {
    const classes = useStyles();

    const [ isOpen, setOpen ] = modalState;
    const handleOpen = () => void setOpen(true);
    const handleClose = () => void setOpen(false);

    const onSubmitHandler = () => onSubmit
        ? void onSubmit()
        : void setOpen(false);

    return (
        <section>
            <CreateLessonButton>
                <IconButton
                    color = 'primary'
                    onClick = { handleOpen }>
                    <AddCircleOutlineIcon className = { classes.iconLarge } />
                </IconButton>
                {/*<Button*/}
                {/*    color = 'primary'*/}
                {/*    startIcon = { <AddIcon /> }*/}
                {/*    variant = 'contained'*/}
                {/*    // variant = 'outlined'*/}
                {/*    onClick = { handleOpen }>*/}
                {/*    /!*{options.buttonText}*!/*/}
                {/*</Button>*/}
            </CreateLessonButton>
            <Dialog
                fullWidth
                keepMounted
                TransitionComponent = { Transition }
                aria-describedby = 'alert-dialog-slide-description'
                aria-labelledby = 'alert-dialog-slide-title'
                open = { isOpen }
                onClose = { handleClose }>
                <DialogTitle id = 'alert-dialog-slide-title'>{options.title}</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button
                        color = 'primary'
                        onClick = { handleClose }>
                        Cancel
                    </Button>
                    <Button
                        color = 'primary'
                        onClick = { onSubmitHandler }>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};
