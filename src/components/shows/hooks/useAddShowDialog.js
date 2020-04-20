import {useState} from 'react';

export default () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return {
        openDialog: openDialog,
        handleClickOpen: handleClickOpen,
        handleClose: handleClose
    };
}
