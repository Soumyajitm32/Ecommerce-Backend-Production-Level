const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');

const {PORT} = require('./config/serverConfig');
const ApiRouter = require('./routes/apiRouter');

const db = require('./config/dbConfig');


const Category = require('./models/category');

const app = express();


app.use(responseTime());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', ApiRouter); // if any req comes with url starting with /api

app.listen(PORT, async () => {
    console.log(`Server for Shopcart is Up ${PORT}`);
    await db.sync({ alter: true });
    console.log('DB Connected');

})