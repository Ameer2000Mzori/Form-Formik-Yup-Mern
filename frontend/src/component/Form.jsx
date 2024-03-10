import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  StyledForm,
  StyledFormWrap,
  StyledInputsWrap,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledInputsTextAreaWrap,
} from './hooks/StyledComponents.jsx'

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phonenumber: Yup.string().required('Required'),
  age: Yup.number()
    .min(0, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  gender: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  textarea: Yup.string(),
})

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      age: '18',
      gender: 'male',
      country: '',
      city: '',
      textarea: '',
    },

    onSubmit: (values) => {
      console.log('this is the values')
      console.log('this is the values', values)
    },
    validationSchema: validationSchema,
  })

  return (
    <StyledFormWrap>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
        <StyledInputsWrap>
          <StyledLabel htmlFor="firstname">firstname</StyledLabel>
          <StyledInput
            type="text"
            name="firstname"
            id="firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          <p>{formik.errors.firstname}</p>
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel htmlFor="lastname">lastname</StyledLabel>
          <StyledInput
            type="text"
            name="lastname"
            id="lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          <p>{formik.errors.lastname}</p>
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel htmlFor="email">email</StyledLabel>
          <StyledInput
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <p>{formik.errors.email}</p>
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel htmlFor="phonenumber">number</StyledLabel>
          <StyledInput
            type="number"
            name="phonenumber"
            id="phonenumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phonenumber}
          />
          <p>{formik.errors.number}</p>
        </StyledInputsWrap>

        <div className="flex flex-row text-center items-center justify-between h-[50px] w-[50%]">
          <div className="flex flex-row text-center items-center gap-2">
            <StyledLabel htmlFor="age">age</StyledLabel>
            <input
              type="number"
              name="age"
              id="age"
              className="w-[35px]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
            <p>{formik.errors.age}</p>
          </div>
          <div className="flex flex-row text-center items-center gap-2">
            <StyledLabel htmlFor="gender"> gender</StyledLabel>
            <select
              id="gender"
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <p>{formik.errors.gender}</p>
          </div>
        </div>

        <StyledInputsWrap>
          <StyledLabel htmlFor="country">Country</StyledLabel>
          <StyledInput
            type="text"
            name="country"
            id="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          />
          <p>{formik.errors.country}</p>
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledInput
            type="text"
            name="city"
            id="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          <p>{formik.errors.city}</p>
        </StyledInputsWrap>

        <StyledInputsTextAreaWrap>
          <StyledLabel htmlFor="textarea">message...</StyledLabel>
          <StyledTextArea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.textarea}
          ></StyledTextArea>
          <p>{formik.errors.textarea}</p>
        </StyledInputsTextAreaWrap>

        <button
          type="submit"
          className="w-[120px] h-[30px] rounded-[5px] bg-slate-500 text-white hover:bg-slate-300 active:bg-slate-600"
        >
          submit
        </button>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default Form
