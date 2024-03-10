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
        <div className="flex flex-row text-center items-center justify-between h-[50px] w-[50%]">
          <div className="flex flex-row text-center items-center gap-2">
            <label for="age">age</label>
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
            <label for="genderselection"> gender</label>
            <select id="genderselection">
              <option value="">male</option>
              <option value="">female</option>
            </select>
          </div>
        </div>

        <StyledInputsWrap>
          <label for="country">Country</label>
          <input type="text" name="country" id="country" />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <label for="city">City</label>
          <input type="city" name="city" id="city" />
        </StyledInputsWrap>

        <StyledInputsWrap>
          <label for="textarea">message...</label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
          ></textarea>
        </StyledInputsWrap>
      </StyledForm>
    </StyledFormWrap>
  )
}

export default Form
