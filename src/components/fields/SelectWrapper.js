import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const SelectWrapper = (props) => {

    const { name, options, ...otherProps } = props;

    const [field, meta] = useField(name);

    const configSelect = {
        ...otherProps,
        ...field,
        fullWidth: true,
        variant: "outlined",
        select: true
    }

    if (meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }

    return (
        <TextField {...configSelect} >
            {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label} ({option.value})
                </MenuItem>
            ))}
        </TextField>
    )
}

export default SelectWrapper