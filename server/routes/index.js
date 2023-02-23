const express = require('express');
const router = express.Router();
const customers = require('./Customer');
const books= require('./Books');
const employee = require('./Employee');

router.get('/', (req, res) => {
    res.send('Customer or employee')
})
router.use('/customer', customers);
router.use('/book', books);
router.use('/employee', employee);

module.exports = router;