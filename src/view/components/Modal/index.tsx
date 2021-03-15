// Core
import React, { useState, FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Components
import { Transition } from './Transition';

// Types
import { OnMutationHanlerType } from '../../../@types/types';

type PropTypes = {
    title: string
    onMutationSubmit: OnMutationHanlerType
}

export const Modal: FC<PropTypes> = ({
    children,
    onMutationSubmit,
    title,
}) => {
    const [ open, setOpen ] = useState(false);

    const handleOpen = () => void setOpen(true);
    const handleClose = () => void setOpen(false);

    const onSubmitHandler = () => onMutationSubmit
        ? void onMutationSubmit({
            onSuccess: handleClose,
        })
        : void setOpen(false);

    return (
        <section>
            <Button
                color = 'primary'
                variant = 'outlined'
                onClick = { handleOpen }>
                Create lesson
            </Button>
            <Dialog
                keepMounted
                TransitionComponent = { Transition }
                aria-describedby = 'alert-dialog-slide-description'
                aria-labelledby = 'alert-dialog-slide-title'
                open = { open }
                onClose = { handleClose }>
                <DialogTitle id = 'alert-dialog-slide-title'>Create lesson form.</DialogTitle>
                <DialogContent>
                    <DialogContentText id = 'alert-dialog-slide-description'>
                        {title}
                    </DialogContentText>
                </DialogContent>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button
                        color = 'primary'
                        onClick = { handleClose }>
                        Disagree
                    </Button>
                    <Button
                        color = 'primary'
                        onClick = { onSubmitHandler }>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};
