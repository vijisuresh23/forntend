import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField} from "@material-ui/core";
import PropTypes from "prop-types";
import {CURRENCY_SYMBOL} from "../../Constants";
import showService from "./services/ShowService";

const AddShowDialog = ({open, onClose, load, onAddShow}) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    const handleChange = (event, setState) => {
        setState(event.target.value);
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        load(true);
        const payload = {
            name: name,
            description: description,
            price: price
        };
        showService.create(payload).then(data => {
            load(false);
            onAddShow(data);
        });
        onClose();
    };

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Add Show</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        onChange={
                            (event) => handleChange(event, setName)
                        }
                        label="Name"
                        fullWidth
                    />
                    <TextField
                        required
                        margin="dense"
                        onChange={
                            (event) => handleChange(event, setDescription)
                        }
                        label="Description"
                        multiline
                        fullWidth
                    />
                    <TextField
                        required
                        margin="dense"
                        onChange={
                            (event) => handleChange(event, setPrice)
                        }
                        label="Price"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">{CURRENCY_SYMBOL}</InputAdornment>
                        }}
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleOk} color="primary" disabled={name === null || description === null || price === null}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

AddShowDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    onAddShow: PropTypes.func.isRequired
};

export default AddShowDialog;
