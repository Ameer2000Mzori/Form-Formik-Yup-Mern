import express from 'express'
import 'dotenv/config'
import uniqid from 'uniqid'

// adding Router
const app = express()
const Router = express.Router()
app.use(express.json())
app.use(Router)

// port
const PORT = process.env.PORT || 4000

// data :
const formData = []

// requests
Router.get('/', (req, res) => {
  res.send('hollo world')
})

Router.get('/forms', (req, res) => {
  res.send(formData)
})

Router.post('/postform/', (req, res) => {
  const { firstname, lastname, age, gender, country, city, message } = req.body
  console.log('Values added:', {
    firstname,
    lastname,
    age,
    gender,
    country,
    city,
    message,
  })

  const newForm = {
    firstname,
    lastname,
    age,
    gender,
    country,
    city,
    message,
    id: uniqid(),
  }

  formData.unshift(newForm)
  console.log(
    `data we got : ${firstname}, ${lastname}, ${age}, ${gender}, ${country}, ${city}, ${message}`
  )
  res.status(200).send('Form submitted successfully.')
})

// server listening
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
