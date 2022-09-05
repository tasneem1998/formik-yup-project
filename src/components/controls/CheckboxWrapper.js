import React from "react";
import { useField } from "formik";
import Checkbox from "@mui/material/Checkbox"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import FormGroup from "@mui/material/FormGroup"

const CheckboxWrapper = (props) => {
    const { name, legend, label, ...otherProps } = props;

    const [field, meta] = useField(name)
    const configCheckbox = {
        ...otherProps,
    }
    if (meta.touched && meta.error) {
        configCheckbox.error = true;
        configCheckbox.helperText = meta.error
    }
    return (
        <FormControl {...configCheckbox}>
            <FormLabel component="legend">{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox {...field} />}
                    label={label}
                />
            </FormGroup>

        </FormControl>
    )
}

export default CheckboxWrapper