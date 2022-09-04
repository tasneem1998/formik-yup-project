import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik"
import TextFieldMui from './fields/TextFieldWrapper';
import * as Yup from 'yup';
import SelectWrapper from './fields/SelectWrapper';
import { countries } from '../config/data';

const INITIAL_FORM_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address_line1: "",
    address_line2: "",
    state: "",
    country: ""
}

const FORM_VALIDATION = Yup.object().shape({
    first_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required("Required"),
    last_name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required("Required"),
    email: Yup.string()
        .email("Invalid Email")
        .required("Required"),
    phone: Yup.number()
        .typeError("Invalid Phone")
        .required("Required"),
    address_line1: Yup.string()
        .required("Required"),
    address_line2: Yup.string()
        .required("Required"),
    state: Yup.string(),
    country: Yup.string()
        .required("Required")
})


const BasicForm = () => {
    return (
        <>
            <Container maxWidth="md" sx={{ my: 4 }}>
                <Formik
                    initialValues={{
                        ...INITIAL_FORM_STATE
                    }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={(values) => {
                        console.log(values, "val")
                    }}
                >
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography>
                                    Your Details
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextFieldMui
                                    name="first_name"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextFieldMui
                                    name="last_name"
                                    label="Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldMui
                                    name="email"
                                    label="Email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldMui
                                    name="phone"
                                    label="Phone Number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Adress
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldMui
                                    name="address_line1"
                                    label="Address Line1"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldMui
                                    name="address_line2"
                                    label="Address Line2"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextFieldMui
                                    name="state"
                                    label="State"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectWrapper
                                    name="country"
                                    label="Country"
                                    options={countries}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography>
                                    Booking Information
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" type="submit">Submit</Button>
                            </Grid>
                        </Grid>

                    </Form>
                </Formik>

            </Container>
        </>
    )
}

export default BasicForm