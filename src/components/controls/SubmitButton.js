import React from "react";
import Button from "@mui/material/Button";
const SubmitButton = (props) => {
    const { label } = props;

    const configButton = {
        fullWidth: true,
        variant: "contained",
        type: "submit"
    }
    return (
        <Button {...configButton}>{label}</Button>
    )
}
export default SubmitButton