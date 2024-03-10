// AddNewForm.jsx
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const AddNewForm = () => {
  const queryClient = useQueryClient()
  const valuesAdded = useMutation({
    mutationFn: (values) => axios.post(`/postform/`, values),
    onSuccess: () => {
      queryClient.invalidateQueries(['forms'])
      console.log('Todo post successfully')
    },
    onError: (error) => {
      console.error('There was an error', error)
    },
  })

  return valuesAdded
}

export default AddNewForm
