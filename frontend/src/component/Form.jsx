import React from 'react'
import { useFormik } from 'formik'
import { validationSchema } from './hooks/validationSchema.js'

import {
  StyledForm,
  StyledFormWrap,
  StyledInputsWrap,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledInputsTextAreaWrap,
  StyledErrorMessage,
} from './hooks/StyledComponents.jsx'

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

    onSubmit: (values, { resetForm }) => {
      console.log('this is the values')
      console.log('this is the values', values)

      resetForm()
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
          <StyledErrorMessage>{formik.errors.firstname}</StyledErrorMessage>
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
          <StyledErrorMessage>{formik.errors.lastname}</StyledErrorMessage>
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
          <StyledErrorMessage>{formik.errors.email}</StyledErrorMessage>
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
          <StyledErrorMessage>{formik.errors.number}</StyledErrorMessage>
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
            <StyledErrorMessage>{formik.errors.age}</StyledErrorMessage>
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
            <StyledErrorMessage>{formik.errors.gender}</StyledErrorMessage>
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
          <StyledErrorMessage>{formik.errors.country}</StyledErrorMessage>
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
          <StyledErrorMessage>{formik.errors.city}</StyledErrorMessage>
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
          <StyledErrorMessage>{formik.errors.textarea}</StyledErrorMessage>
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
