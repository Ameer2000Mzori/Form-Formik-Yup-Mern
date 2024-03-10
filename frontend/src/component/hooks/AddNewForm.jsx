// AddNewForm.jsx
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const AddNewForm = () => {
  const addNewForm = useMutation((values) => axios.post(`/postform`, values), {
    onSuccess: () => {
      console.log('Todo updated successfully')
    },
    onError: (error) => {
      console.error('There was an error', error)
    },
  })

  return addNewForm
}

export default AddNewForm
