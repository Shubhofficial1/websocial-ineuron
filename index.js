import express from 'express'
import dotenv from 'dotenv'
import format from 'date-format'

// initialize app with express framework
const app = express()

// dotenv configuration
dotenv.config()

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello From Shubham</h1>')
})

app.get('/api/v1/instagram', (req, res) => {
  const instaDetails = {
    name: 'Shubham Kumar',
    email: 'shubham@instagram.com',
    date: format.asString('dd[MM] - hh:mm:ss', new Date()),
  }
  res.status(200).json(instaDetails)
})

app.get('/api/v1/facebook', (req, res) => {
  const facebookDetails = {
    name: 'Shubham Kumar',
    email: 'shubham@facebook.com',
    date: format.asString('dd[MM] - hh:mm:ss', new Date()),
  }
  res.status(200).json(facebookDetails)
})

app.get('/api/v1/linkedin', (req, res) => {
  const linkedinDetails = {
    name: 'Shubham Kumar',
    email: 'shubham@linkedin.com',
    date: format.asString('dd[MM] - hh:mm:ss', new Date()),
  }
  res.status(200).json(linkedinDetails)
})

app.get('/api/v1/:token', (req, res) => {
  console.log(req.params.token)
  res.status(200).json({ param: req.params.token })
})

// Default Port
const PORT = process.env.PORT || 5000

// App Listener
app.listen(PORT, () => {
  console.log(
    `Server is running on PORT ${process.env.PORT} in ${process.env.MODE} mode`
  )
})
