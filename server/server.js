const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const productRouter = require('./routes/product');
const ownerRouter = require('./routes/owner');
const categoryRouter = require('./routes/category');

dotenv.config();

const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));


/** Middleware */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use('/api', productRouter);
app.use('/api', ownerRouter);
app.use('/api', categoryRouter);


/** Connect to database and create server*/
mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(value => {
        console.log("Connection successfully!!!!!!!!!!!!!!");
        console.log("App listen in port 3000");
        app.listen(3000)
    })
    .catch(reason => {
        console.log(reason)
    })