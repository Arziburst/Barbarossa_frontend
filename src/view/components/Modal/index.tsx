import React, { useState, FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return (
        <Slide
            direction = 'up'
            ref = { ref }
            { ...props }
        />
    );
});

export const Modal: FC = () => {
    const [ open, setOpen ] = useState(false);

    const handleClickOpen = () => void setOpen(true);
    const handleClose = () => void setOpen(false);

    return (
        <section>
            <Button
                color = 'primary'
                variant = 'outlined'
                onClick = { handleClickOpen }>
                Create lesson
            </Button>
            <Dialog
                keepMounted
                TransitionComponent = { Transition }
                aria-describedby = 'alert-dialog-slide-description'
                aria-labelledby = 'alert-dialog-slide-title'
                open = { open }
                onClose = { handleClose }>
                <DialogTitle id = 'alert-dialog-slide-title'>{'Use Google\'s location service?'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id = 'alert-dialog-slide-description'>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        color = 'primary'
                        onClick = { handleClose }>
                        Disagree
                    </Button>
                    <Button
                        color = 'primary'
                        onClick = { handleClose }>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};
