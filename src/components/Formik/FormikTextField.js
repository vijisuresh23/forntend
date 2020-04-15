import React from "react";
import {useField} from "formik";
import {TextField} from "@material-ui/core";
import styles from "./styles/FormikTextFieldStyles";

export default (props) => {
    const classes = styles();
    const [field, meta] = useField(props.name);

    const {value, onChange, onBlur} = field;
    const {error, touched} = meta;

    return (
        <TextField
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={touched && Boolean(error)}
            helperText={touched ? error : ''}
            FormHelperTextProps={{
                className: classes.helperText
            }}
            {...props}
        />
    );
};
