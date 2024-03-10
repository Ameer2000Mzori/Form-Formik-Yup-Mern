import express from 'express'

// adding Router
const Router = express.Router()
const app = express()

// data :
const formData = []

// requests
Router.get('/', (req, res) => {
  res.send('Hello World')
})

Router.post('/postform', (req, res) => {
  const { firstname, lastname, age, gender, country, city, message } = req.body
  res.send(
    'data we got : ',
    firstname,
    lastname,
    age,
    gender,
    country,
    city,
    message
  )
})

// server listening
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
