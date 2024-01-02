var express = require('express');
const api = require('./userController');
const upload = require('./../../middleware/imageUpload');
const db = require('./../../database/dbConnect')
var router = express.Router();


/* GET users listing. */
router.get('/', api.getUserList);

// POST Method

router.post('/create', api.createUser);

// PUT Method

router.put('/update/:id', api.updateUser);

// DELETE Method

router.delete('/delete/:id', api.deleteUser);

// Multipart Method

router.post("/upload", upload.single('image'), api.uploadUserImage);

module.exports = router;
