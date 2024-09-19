const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors')

const calcRoute = require('./Calc.Route/v1/calc');

app.use(cors())
app.use(express.json());



app.use('/api/calculate', calcRoute);



const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is running  on port', port)
});

