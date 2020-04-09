import React from "react";
import PropTypes from "prop-types";
import {number, object, string} from "yup";
import {CURRENCY_SYMBOL} from "../../Constants";
import {Form, Formik} from "formik";
import showService from "./services/ShowService"
import {FormikTextField} from "../Formik";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment,Select, MenuItem, InputLabel, FormControl} from "@material-ui/core";

const AddShowDialog = ({open, onClose, load, onAddShow}) => {
    const initialValues = {
        name: "",
        description: "",
        price: "",
        status: "RUNNING"
    };

    const nameValidationMessage = "Name must be 1 to 30 characters";
    const descriptionValidationMessage = "Description must be 5 to 200 characters";
    const priceValidationMessage = `Price must be at least ${CURRENCY_SYMBOL}1`;

    const formSchema = object({
        name: string("Enter a name")
            .required("Name is required")
            .min(1, nameValidationMessage)
            .max(30, nameValidationMessage),
        description: string("Enter a description")
            .required("Description is required")
            .min(5, descriptionValidationMessage)
            .max(200, descriptionValidationMessage),
        price: number("Enter a price")
            .required("Price is required")
            .min(1, priceValidationMessage)
    });

    const handleCancel = () => {
        onClose();
    };

    const createShow = (values) => {
        load(true);
        const payload = {
            name: values.name,
            description: values.description,
            price: values.price,
            status: values.status
        };
        showService.create(payload)
            .then(data => {
                load(false);
                onAddShow(data);
            });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Show</DialogTitle>
            <Formik initialValues={initialValues} onSubmit={createShow} validationSchema={formSchema}>
                {
                    (props) => {
                        const {
                            isValid,
                        } = props;
                        return (
                            <Form>
                                <DialogContent>
                                    <FormikTextField
                                        required
                                        margin="dense"
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        autoComplete='off'
                                    />
                                    <FormikTextField
                                        required
                                        margin="dense"
                                        name="description"
                                        label="Description"
                                        multiline
                                        fullWidth
                                        autoComplete='off'
                                    />
                                    <FormikTextField
                                        required
                                        margin="dense"
                                        label="Price"
                                        name="price"
                                        InputProps={{
                                            startAdornment: <InputAdornment
                                                position="start">{CURRENCY_SYMBOL}</InputAdornment>
                                        }}
                                        type="number"
                                        fullWidth
                                        autoComplete='off'
                                    />
                                    <FormControl>
                                    <InputLabel id="status-label" >Status</InputLabel>
                                    <Select
                                        margin="dense"
                                        name="status"
                                        labelId="status-label"
                                        label="Status"
                                        autoWidth={true}
                                        defaultValue={"RUNNING"}
                                        onChange={event => {
                                           props.values.status= event.target.value
                                            }}
                                    >
                                        <MenuItem name="status" value={"RUNNING"}>Screening Now</MenuItem>
                                        <MenuItem name="status" value={"UPCOMING"}>Coming Soon</MenuItem>
                                    </Select></FormControl>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleCancel} color="primary">
                                        Cancel
                                    </Button>
                                    <Button type="submit" disabled={!isValid} color="primary">
                                        Ok
                                    </Button>
                                </DialogActions>
                            </Form>
                        );
                    }
                }
            </Formik>
        </Dialog>
    );
};

AddShowDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    onAddShow: PropTypes.func.isRequired
};

export default AddShowDialog;
