import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from './styles/AddShowStyles'
import AddShowDialog from "./AddShowDialog";

const AddShow = (props) => {
    const classes = styles();
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                startIcon={<AddIcon/>}
                onClick={handleClickOpen}
            >
                Add
            </Button>
            <AddShowDialog open={openDialog} onClose={handleClose} {...props}/>
        </>
    );
};

AddShow.propTypes = {
    load: PropTypes.func.isRequired,
    onAddShow: PropTypes.func.isRequired
};

export default AddShow;
