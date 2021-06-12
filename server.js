const express = require('express');
const app = express();
const port = 3000;
const dbConfig = require('./config/db');

const userRoute = require('./routes/user')

app.use('/user', userRoute)


app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})