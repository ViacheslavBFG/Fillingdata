import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  MainDiv,
  NameDiv,
  EmailDiv,
  BtnDiv,
  BtnStyle,
  HeaderTwo,
  ErrorText,
} from './mainStyle';
import { Pthird } from 'components/thirdstep/thirdstepStyle';
import { TextField } from '@mui/material';

const Main = () => {
  return (
    <MainDiv>
      <HeaderTwo>Calculation Form</HeaderTwo>
      <Pthird>
        Please enter your personal information for the calculation of the cost
      </Pthird>
      <hr />
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('First name is required'),
          lastName: Yup.string().required('Last name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {formik => (
          <Form>
            <NameDiv>
              <Field
                id="firstName"
                name="firstName"
                label="First name"
                as={TextField}
                variant="outlined"
                size="small"
                fullWidth
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
              />
              <ErrorMessage name="firstName" component={ErrorText} />
              <Field
                id="lastName"
                name="lastName"
                label="Last name"
                as={TextField}
                variant="outlined"
                size="small"
                fullWidth
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
              />
              <ErrorMessage name="lastName" component={ErrorText} />
            </NameDiv>
            <EmailDiv>
              <Field
                id="email"
                name="email"
                label="Email"
                as={TextField}
                variant="outlined"
                size="small"
                fullWidth
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
              <ErrorMessage name="email" component={ErrorText} />
            </EmailDiv>
            <BtnDiv>
              <Link to={'/secondstep'}>
                <BtnStyle
                  type="submit"
                  disabled={formik.isSubmitting || !formik.isValid}
                >
                  NEXT
                </BtnStyle>
              </Link>
            </BtnDiv>
          </Form>
        )}
      </Formik>
    </MainDiv>
  );
};

export default Main;
