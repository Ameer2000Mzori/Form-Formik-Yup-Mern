import express from 'express'
import 'dotenv/config'
// adding Router
const Router = express.Router()
const app = express()

// port
const PORT = process.env.PORT || 4000

// data :
const formData = []

// requests
Router.get('/', (req, res) => {
  res.send('Hello World')
})

Router.get('/forms', (req, res) => {
  res.send(formData)
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
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
