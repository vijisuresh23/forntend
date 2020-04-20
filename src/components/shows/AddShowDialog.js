import React from "react";
import PropTypes from "prop-types";
import {CURRENCY_SYMBOL} from "../../Constants";
import {Form, Formik} from "formik";
import {FormikSelect, FormikTextField} from "../formik";
import styles from "./styles/addShowDialogStyles";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment} from "@material-ui/core";
import addShowDialogService from "./services/addShowDialogService";

const AddShowDialog = ({open, onClose, loadShow, onAddShow}) => {
    const classes = styles();
    const {initialValues, formSchema, handleCancel, createShow} = addShowDialogService(onClose, loadShow, onAddShow);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle className={classes.dialogTitle}>Add Show</DialogTitle>
            <Formik initialValues={initialValues} onSubmit={createShow} validationSchema={formSchema}>
                {
                    (props) => {
                        const {
                            isValid,
                        } = props;
                        return (
                            <Form>
                                <DialogContent className={classes.dialogContent}>
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
                                        autoComplete='off'
                                        className={classes.priceInput}
                                    />
                                    <FormikSelect
                                        className={classes.dialogFormControl}
                                        id="status-label"
                                        margin="dense"
                                        name="status"
                                        label="Status"
                                        defaultValue={"RUNNING"}
                                        options={[
                                            {value: "RUNNING", display: "Screening Now"},
                                            {value: "UPCOMING", display: "Coming Soon"}
                                        ]}
                                    />
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
    )
        ;
};

AddShowDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    loadShow: PropTypes.func.isRequired,
    onAddShow: PropTypes.func.isRequired
};

export default AddShowDialog;
