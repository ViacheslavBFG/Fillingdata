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
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  return (
    <MainDiv>
      <HeaderTwo>{t('main.header')}</HeaderTwo>
      <Pthird>{t('main.inf')}</Pthird>
      <hr />
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string().required(t('main.error.firstName.required')),
          lastName: Yup.string().required(t('main.error.lastName.required')),
          email: Yup.string()
            .email(t('main.error.email.invalid'))
            .required(t('main.error.email.required')),
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
                label={t('main.placeholder.firstName')}
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
                label={t('main.placeholder.lastName')}
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
                label={t('main.placeholder.email')}
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
                  disabled={
                    formik.isSubmitting || !formik.isValid || !formik.dirty
                  }
                  style={{
                    opacity: formik.isValid && formik.dirty ? 1 : 0.5,
                    cursor:
                      formik.isValid && formik.dirty
                        ? 'pointer'
                        : 'not-allowed',
                  }}
                >
                  {t('main.button.next')}
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
