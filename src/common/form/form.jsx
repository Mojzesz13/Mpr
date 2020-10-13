import React, { useState } from 'react';
import './form.scss';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import ButtonContact from './buttonContact';
import TextInput from './input';

import {
  Input,
  StyledInlineErrorMessage,
} from "./styles";

const formSchema = Yup.object({
  personalDate: Yup.string()
    .typeError('Akceptujemy tylko litert')
    .min(6, 'Minimum 6 znaków')
    .max(40, 'Maxymalnie 30 znaków')
    .required('Pole obowiązkowe'),
  email: Yup.string()
    .typeError('Proszę podać poprawny adres email')
    .email('Proszę podać poprawny adres email')
    .min(6, 'Minimum 6 znaków')
    .required('Pole obowiązkowe'),
  // acceptTerms: Yup.boolean()
  //   .required('Pole obowiązkowe ')
  //   .oneOf([true], 'Pole obowiązkowe'),
})

const FormContact =()=> {
  const[test, setTest] = useState("immie")
    return (
      <>
      <div  className="formContainer">
        <Formik 
          initialValues={{
            personalDate: '',
            email: '',  
            message: '',
            // acceptTerms: false,
          }}
          validationSchema={formSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              emailjs
                .send(
                  'gmail',
                  'template_UCgO4nyS',
                  {
                    personalDate: values.personalDate,
                    email: values.email,
                    message: values.message,
                  },
                  'user_0dBUHSltv50ciiIFRlEjN'
                )
                .then(() => {
                  console.log(values);
                })
                .then(() => {
                  setSubmitting(false);
                  resetForm();
                })
                .catch(() => {
                  setSubmitting(false);
                  alert('Error sending email...');
                });
            }, 1000);
          }}
        >
              {({
                handleSubmit, 
                handleChange,
                handleBlur,
                resetForm,
                values,
                errors,
                touched
                }) => {
                return(
                  <Form onSubmit={handleSubmit}>
                      <div className="formContainer">
                         <label htmlFor="personalDate"/>
                         <div className="inputHolder"> 
                            <Input
                              type="text"
                              name="personalDate"
                              autoCorrect="off"
                              autoComplete="name"
                              placeholder="Imię i nazwisko"
                              valid={touched.personalDate && !errors.personalDate}
                              error={touched.personalDate && errors.personalDate}
                             />
                            
                             {errors.personalDate && touched.personalDate && (
                              <StyledInlineErrorMessage>
                                {setTest(errors.personalDate )}
                                {errors.personalDate}
                              </StyledInlineErrorMessage>
                              )}
                              </div>
                              <div className="inputHolder"> 
                          <label htmlFor="email"/>
                            <Input
                              type="email"
                              name="email"
                              autoCapitalize="off"
                              autoCorrect="off"
                              autoComplete="email"
                              placeholder="Email"
                              valid={touched.email && !errors.email}
                              error={touched.email && errors.email}
                            />
                         <ErrorMessage name="email">
                            {msg => (
                              <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                            )}
                          </ErrorMessage>
                          </div>
                      {/* <TextInput  
                          name={"personalDate"}
                          label={"Imie"}
                          placeholder={"Imię i nazwisko"}
                        />
                       <TextInput 
                          label={"Email"}
                          name={"email"}
                          placeholder={"Email"}
                        /> */}
                        <div className="textAreaContainer">
                          <textarea label="Wiadomość" placeholder="Wiadomość" name="message" type="text" />
                        </div>
                      <ButtonContact/>
                      </div>
                  </Form>
                )
              }}
          </Formik>
          </div>
          </>
    );
  
}

export default FormContact;


