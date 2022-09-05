import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

const DateTimeWrapper = (props) => {
    const { name, ...otherprops } = props;

    const [field, meta] = useField(name)

    const configDateTime = {
        ...otherprops,
        ...field,
        type: "date",
        fullWidth: true,
        variant: "outlined",
        InputLabelProps: {
            shrink: true
        }
    }

    if (meta.touched && meta.error) {
        configDateTime.error = true;
        configDateTime.helperText = meta.error
    }
    return (
        <TextField {...configDateTime} />
    )
}

export default DateTimeWrapper