const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');

const router = express.Router();

// adding Helmet to enhance your API's security
router.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
router.use(bodyParser.json());

// enabling CORS for all requests
router.use(cors());

// adding morgan to log HTTP requests
router.use(morgan('combined'));

module.exports = router;