console.log("routes book");
const express = require('express')
const router = express.Router()
const books = require("../controller/books.controller");

router.get('/api/books',books.findAll)


module.exports = router



