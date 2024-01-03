const memberModel = require("./memberModel");
const api = require('./memberController');
var express = require('express');
var router = express.Router();

router.get('/getMemberById', api.getMemberById);
router.get('/getMemberList', api.getMemberList)
module.exports = router;