import React from "react";
import {useField} from "formik";
import {TextField} from "@material-ui/core";

export default (props) => {
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
            {...props}
        />
    );
};
