import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik"
import TextFieldMui from './fields/TextFieldWrapper';
import * as Yup from 'yup';

const INITIAL_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
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
})


const BasicForm = () => {
    return (
        <>
            <Container maxWidth="md" sx={{ my: 4 }}>
                <Formik
                    initialValues={{
                        ...INITIAL_STATE
                    }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={(values)=>{
                        console.log(values,"val")
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
                                <TextFieldMui name="first_name" label="First Name"/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextFieldMui name="last_name" label="Last Name"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldMui name="email" label="Email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextFieldMui name="phone" label="Phone Number"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Adress
                                </Typography>
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