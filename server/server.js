const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
app.use(express.json());

app.use('/api/cars/' , require('../server/routes/carsRoute'))

app.use('/api/users/' , require('../server/routes/usersRoute'))

app.use('/api/bookings/' , require('../server/routes/bookingsRoute'))

app.get('/', (req, res) => res.send('Hellow World'))
app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))

