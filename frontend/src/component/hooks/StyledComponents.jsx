import styled from 'styled-components'

export const StyledFormWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #14245;
`

export const StyledForm = styled.form`
  width: 500px;
  height: 700px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #f4edcc;
`

export const StyledInputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50px;
`

export const StyledLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
`
export const StyledInput = styled.input`
  border-radius: 5px;
  resize: no-resize;
  border: 1px solid #ccc;
`

export const StyledTextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
  height: 100px;
`

export const StyledInputsTextAreaWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100px;
`
