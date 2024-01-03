const postModel = require("./postingModel");
const api = require('./postingController')
var express = require('express');
var router = express.Router();

router.post('/', api.createPosting);

// 게시물 전체 조회
router.get('/', api.getPostingList);

// 게시물 id로 조회
router.get('/:id', api.getPostingById);

// update
router.put("/:id", api.updatePosting);

// delete
router.delete("/:id", api.deletePosting);

module.exports = router