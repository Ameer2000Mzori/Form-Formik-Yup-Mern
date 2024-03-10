import React from 'react'
import { useFormik } from 'formik'
import {
  StyledForm,
  StyledFormWrap,
  StyledInputsWrap,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledInputsTextAreaWrap,
} from './hooks/StyledComponents.jsx'

// const formik = new useFormik({
//   initialValues: {
//     firstname: '',
//     lastname: '',
//     age: '',
//     gender: '',
//     country: '',
//     city: '',
//     message: '',
//   },
//   validationSchema: {
//     name: {
//       required: true,
//     },
//     email: {
//       required: true,
//     },
//     message: {
//       required: true,
//     },
//   },
//   onSubmit: (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2))
//       setSubmitting(false)
//     }, 400)
//   },
// })

const Form = () => {
  return (
    <StyledFormWrap>
      <StyledForm>
        <StyledInputsWrap>
          <StyledLabel for="firstname">firstname</StyledLabel>
          <StyledInput type="text" name="firstname" id="firstname" />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel for="lastname">lastname</StyledLabel>
          <StyledInput type="text" name="lastname" id="lastname" />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel for="email">email</StyledLabel>
          <StyledInput type="email" name="email" id="email" />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel for="phonenumber">number</StyledLabel>
          <StyledInput type="number" name="phonenumber" id="phonenumber" />
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
            />
          </div>
          <div className="flex flex-row text-center items-center gap-2">
            <StyledLabel for="genderselection"> gender</StyledLabel>
            <select id="genderselection">
              <option value="">male</option>
              <option value="">female</option>
            </select>
          </div>
        </div>

        <StyledInputsWrap>
          <StyledLabel for="country">Country</StyledLabel>
          <StyledInput type="text" name="country" id="country" />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <StyledLabel for="city">City</StyledLabel>
          <StyledInput type="text" name="city" id="city" />
        </StyledInputsWrap>

        <StyledInputsTextAreaWrap>
          <StyledLabel for="textarea">message...</StyledLabel>
          <StyledTextArea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
          ></StyledTextArea>
        </StyledInputsTextAreaWrap>

        <button className="w-[120px] h-[30px] rounded-[5px] bg-slate-500 text-white hover:bg-slate-300 active:bg-slate-600">
          submit
        </button>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default Form
