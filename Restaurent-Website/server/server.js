//configuring dotenv
require('dotenv').config();

const express = require('express');
const errorMiddleware = require('./middlewares/error-middleware.js');
const app = express();
const authrouter = require('./routes/auth-routes.js');
const paymentrouter = require('./routes/payment-routes.js')
const connectDb = require('./utils/db.js');
const port = process.env.PORT;
const cors = require('cors');

//middleware
app.use(express.json());


//cors middleware

const corsOption = {
    origin : "https://restaurent-website-opal.vercel.app",
    methods : "GET, POST, PUT, DELETE, PATCH",
    credentials : true
}
app.use(cors(corsOption));

// authrouter
app.use('/api/auth', authrouter);

//payment
app.use('/api/payment', paymentrouter);


app.use(errorMiddleware);

//Connecting database
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    })
})
