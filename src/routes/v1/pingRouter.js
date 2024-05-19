
const express = require('express');

const { pingControllerV1 } = require('../../controllers/pingController');


const pingRouter = express.Router();


pingRouter.get('/', pingControllerV1); 



module.exports = pingRouter;
