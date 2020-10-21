import React from 'react';
import './form.scss';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import ButtonContact from './buttonContact';
import Rodo from './rodo';
import Textarea from './textarea';
import TextInput from "./input";

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
  acceptTerms: Yup.boolean()
    .required('Pole obowiązkowe ')
    .oneOf([true], 'Pole obowiązkowe'),
})

const FormContact =({handleOpenPolicy})=> {
    return (
      <div  className="form-container">
        <Formik 
          initialValues={{
            personalDate: '',
            email: '',  
            message: '',
            acceptTerms: false,
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
                    <TextInput
                      name="personalDate"
                      lable="Imię i nazwisko"
                      type="text"
                      touched={touched.personalDate}
                      errors={errors.personalDate}
                      />
                    <TextInput
                      type="email"
                      name="email"
                      lable="Email"
                      touched={touched.email}
                      errors={errors.email}
                    />  
                    <Textarea
                      name="message"
                      lable="Wiadomość"
                    />
                    <Rodo handleOpenPolicy={handleOpenPolicy}/>
                    <ButtonContact />
              </Form>
            )
          }
        }
      </Formik>
    </div>
    );
}

export default FormContact;


