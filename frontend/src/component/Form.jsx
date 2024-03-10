import React from 'react'
import {
  StyledForm,
  StyledFormWrap,
  StyledInputsWrap,
} from './hooks/StyledComponents.jsx'

const Form = () => {
  return (
    <StyledFormWrap>
      <StyledForm>
        <StyledInputsWrap>
          <label for="firstname">firstname</label>
          <input type="text" name="firstname" id="firstname" />
        </StyledInputsWrap>
        <StyledInputsWrap>
          <label for="lastname">lastname</label>
          <input type="text" name="lastname" id="lastname" />
        </StyledInputsWrap>
        <StyledInputsWrap>
          <label for="age">age</label>
          <input type="number" name="age" id="age" />
        </StyledInputsWrap>
        <StyledInputsWrap>
          <label for="firstname">firstname</label>
          <input type="text" name="firstname" id="firstname" />
        </StyledInputsWrap>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default Form
