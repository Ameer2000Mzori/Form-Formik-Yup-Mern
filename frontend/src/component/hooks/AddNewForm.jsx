import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'
const AddNewForm = () => {
  const queryClient = new QueryClient()

  const addForm = queryClient({
    queryKey: ['message'],
    queryfn: (firstname, lastname, age, gender, country, city, message) =>
      axios.post('/postform', {
        firstname,
        lastname,
        age,
        gender,
        country,
        city,
        message,
      }),
  })

  return addForm
}

export default AddNewForm
