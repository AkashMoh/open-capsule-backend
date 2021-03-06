import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

//get /participant router
import participants from './routers/participants.js'
import products from './routers/products.js'
import history from './routers/history.js'
import dashboard from './routers/dashboard.js'

//Set mongodb url and port
const mongoURL = 'mongodb+srv://opcap-backend-user:OpenCapsule4@open-capsule.yv6xt.mongodb.net/open-capsule-db?retryWrites=true&w=majority'
const port = process.env.PORT || 3001;

//Start express
const app = express()

//Say all form of data in and out is of json format
app.use(express.json())
app.use(Cors())

//Connect to mongodb
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
const conn = mongoose.connection

//On connection event open, console.log you are connected
conn.on('open', () => {
    console.log('You are connected to Open Capsule DB')
})

//Test at home file
app.get('/', (req, res) => {
    console.log('It works here...')
    res.send('home')
})

//Routes from participants.js file
app.use('/participants', participants);

//Routes from products.js 
app.use('/products', products);

//Routes for history data
app.use('/history', history);

//Routes for Dashboard
app.use('/dashboard', dashboard);

//Listen to port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})





