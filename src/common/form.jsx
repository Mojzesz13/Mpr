import React, { Component } from 'react';
import './form.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import ButtonContact from './buttonContact';
import TextInput from './input';

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


class FormContact extends Component {
  render() {
    return (
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
                      <TextInput  
                          name={"personalDate"}
                          label={"Imie"}
                          placeholder={"Imię i nazwisko"}
                        />
                       <TextInput 
                          label={"Email"}
                          name={"email"}
                          placeholder={"Email"}
                        />
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
    );
  }
}

export default FormContact;