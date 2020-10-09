import React, { Component } from 'react';
import './form.scss';
import { Formik, useField, Form } from 'formik';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import ButtonContact from './buttonContact';

class FormContact extends Component {
  render(
    CustomTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        const errorText = meta.error && meta.touched ? meta.error : '';
        return (
          <>
            <TextField
              {...field}
              label={label}
              helperText={errorText}
              error={!!errorText}
              margin="normal"
              placeholder={label}
              inputProps={{ style: { fontSize: '3rem' } }}
              InputLabelProps={{ style: { display: 'none ' } }}
            />
          </>
        );
      },
      CustomCheckbox = ({ children, ...props }) => {
        const [field, meta] = useField(props, 'checkbox');
        return (
          <>
            <label className="checkbox">
              <input type="checkbox" {...field} {...props} />
              {children}
            </label>
            {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
            ) : null}
          </>
        );
      },
      TextArea = ({ label, ...props }) => {
        const [field] = useField(props);
        return (
          <TextField
            {...field}
            label={label}
            placeholder={label}
            id="standard-basic"
            margin="normal"
            {...field}
            multiline
            rowsMax={10}
            InputLabelProps={{ style: { display: 'none ' } }}
          />
        );
      },


  ) {
    return (
      <div  className="formContainer">
 
  {/* <div className="wave"></div> */}
  {/* <div class="login">
  
</div> */}

<Formik
      initialValues={{
        personalDate: '',
        email: '',
        city: '',
        message: '',
        acceptTerms: false,
      }}
      validationSchema={Yup.object({
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
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          emailjs
            .send(
              'gmail',
              'template_9xns9er',
              {
                personalDate: values.personalDate,
                email: values.email,
                message: values.message,
              },
              'user_0dBUHSltv50ciiIFRlEjN'
            )
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
      {(props) => (
        <Form className="formContainer">
          <div className="inputHolder">
            <input
              label="Imię i nazwisko"
              name="personalDate"
              type="text"
              placeholder="Imię i nazwisko"
            />
          </div>
          <div className="inputHolder">
            <input label="Email" name="email" placeholder="Email" type="text" />
          </div>
          <div className="textAreaContainer">
            <textarea label="Wiadomość" placeholder="Wiadomość" name="message" type="text" />
          </div>
          <div className="buttonContainer">
            <div className="termsContainer">
              {/* <CustomCheckbox name="acceptTerms"></CustomCheckbox>
              <p>Akceptuję politykę prywatności</p>
              <span className="rodoPolicy" >
                RODO
              </span> */}
           <ButtonContact/>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  
</div>
      
    );
  }
}



export default FormContact;
