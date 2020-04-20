import React from "react";
import AddIcon from "@material-ui/icons/Add";
import {Button} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from './styles/addShowStyles'
import AddShowDialog from "./AddShowDialog";
import useAddShowDialog from "./hooks/useAddShowDialog";

const AddShow = (props) => {
    const classes = styles();

    const {openDialog, handleClickOpen, handleClose} = useAddShowDialog();

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
    loadShow: PropTypes.func.isRequired,
    onAddShow: PropTypes.func.isRequired
};

export default AddShow;
