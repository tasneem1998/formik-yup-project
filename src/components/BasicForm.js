import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { Formik, Form } from "formik"
import TextFieldMui from './controls/TextFieldWrapper';
import * as Yup from 'yup';
import SelectWrapper from './controls/SelectWrapper';
import { countries } from '../config/data';
import DateTimeWrapper from './controls/DateTimeWrapper';
import CheckboxWrapper from './controls/CheckboxWrapper';
import SubmitButton from './controls/SubmitButton';

const INITIAL_FORM_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    arrival_date: "",
    departure_date: "",
    message: "",
    tnc: false
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
    address: Yup.string()
        .required("Required"),
    city: Yup.string(),
    state: Yup.string(),
    country: Yup.string()
        .required("Required"),
    arrival_date: Yup.date()
        .required("Required"),
    departure_date: Yup.date()
        .required("Required"),
    message: Yup.string(),
    tnc: Yup.boolean()
        .oneOf([true], "You must agree") // no use not showing just red color
        .required("Required"),
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
                                    Address
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldMui
                                    name="address"
                                    label="Address"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextFieldMui
                                    name="city"
                                    label="City"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextFieldMui
                                    name="state"
                                    label="State"
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                            <Grid item xs={6}>
                                <DateTimeWrapper
                                    name="arrival_date"
                                    label="Arrival Date"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DateTimeWrapper
                                    name="departure_date"
                                    label="Departure Date"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldMui
                                    name="message"
                                    label="Message"
                                    multiline={true}
                                    rows={3}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <CheckboxWrapper
                                    name="tnc"
                                    legend="Accespt Terms Condition"
                                    label="I agree"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SubmitButton label="Submit" />
                            </Grid>
                        </Grid>

                    </Form>
                </Formik>

            </Container>
        </>
    )
}

export default BasicForm