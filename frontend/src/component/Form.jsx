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
  newtodo: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
})

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: '',
      age: '',
      gender: '',
      country: '',
      city: '',
    },

    onSubmit: (values) => {
      console.log(values)
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
          <StyledLabel for="firstname">firstname</StyledLabel>
          <StyledInput
            type="text"
            name="firstname"
            id="firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel for="lastname">lastname</StyledLabel>
          <StyledInput
            type="text"
            name="lastname"
            id="lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel for="email">email</StyledLabel>
          <StyledInput
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel for="phonenumber">number</StyledLabel>
          <StyledInput
            type="number"
            name="phonenumber"
            id="phonenumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phonenumber}
          />
        </StyledInputsWrap>

        <div className="flex flex-row text-center items-center justify-between h-[50px] w-[50%]">
          <div className="flex flex-row text-center items-center gap-2">
            <StyledLabel for="age">age</StyledLabel>
            <input
              type="number"
              min={0}
              max={100}
              name="age"
              id="age"
              className="w-[35px]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
          </div>
          <div className="flex flex-row text-center items-center gap-2">
            <StyledLabel for="gender"> gender</StyledLabel>
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
          </div>
        </div>

        <StyledInputsWrap>
          <StyledLabel for="country">Country</StyledLabel>
          <StyledInput
            type="text"
            name="country"
            id="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel for="city">City</StyledLabel>
          <StyledInput
            type="text"
            name="city"
            id="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
        </StyledInputsWrap>

        <StyledInputsTextAreaWrap>
          <StyledLabel for="textarea">message...</StyledLabel>
          <StyledTextArea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.textarea}
          ></StyledTextArea>
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
