// Core
import React, { FC } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

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
}

export const Modal: FC<PropTypes> = ({
    children,
    onSubmit,
    modalState,
    options,
}) => {
    const [ isOpen, setOpen ] = modalState;
    const handleOpen = () => void setOpen(true);
    const handleClose = () => void setOpen(false);

    const onSubmitHandler = () => onSubmit
        ? void onSubmit()
        : void setOpen(false);

    return (
        <section>
            <Button
                color = 'primary'
                variant = 'outlined'
                onClick = { handleOpen }>
                {options.buttonText}
            </Button>
            <Dialog
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
