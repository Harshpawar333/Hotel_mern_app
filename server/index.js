import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/user.js'
//init app using express
const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json())

// allow all request from 3000 origin
app.use(cors({ origin: 'http://localhost:3000' }))

// backend routes of the application
app.use('/user', userRoutes)

// mongo db connection string from account
const CONNECTION_URL =
  'mongodb+srv://Harsh:harsh123@cluster0.rahg7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// port to run my node backend
const PORT = process.env.PORT || 5000

// method to connect to mongodb
mongoose
  .connect(CONNECTION_URL)
  .then(function () {
    app.listen(PORT, function () {
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    })
  })
  .catch(function (error) {
    console.log(`${error} did not connect`)
  })
