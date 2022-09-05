import * as React from "react"
import TextField from "@mui/material/TextField"
import { useField } from "formik";

const TextFieldWrapper = (props) =>{

    const {name, ...otherProps} = props;

    const [field, meta] = useField(name);
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: "outlined"
    }

    if(meta.touched && meta.error){
        configTextfield.error=true;
        configTextfield.helperText=meta.error
    }

    return(
        <TextField {...configTextfield} />
    )
}

export default TextFieldWrapper