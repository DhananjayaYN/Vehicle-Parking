require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const parkingSlotsRoutes = require('./routes/parkingSlots')
const slotsRoutes = require('./routes/slotsRoute')
// const slotRoutes = require('./routes/slotsRoute')
const ownerRoutes = require('./routes/ownerRoute')
const bookingRoutes = require('./routes/bookingRoute')
const customerRoutes = require('./routes/customerRoute')

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/parking-slots' ,parkingSlotsRoutes)
app.use('/api/slots', slotsRoutes)
app.use('/api/owners', ownerRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/customers', customerRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
