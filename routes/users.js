var express = require('express');
var loginCheck = require('../middleware/loginCheck');
const upload = require('../middleware/imageUpload');
const db = require('../database/dbConnect')
var router = express.Router();

let arr = [];

/* GET users listing. */
router.get('/', loginCheck, function(req, res, next) {
  // res.send('respond with a resource');
  res.status(200).json({
    status: {
      message: "조회 성공",
      code: res.statusCode
    },
    result: arr
  })
});

// POST Method

router.post('/create', (req, res) => {
  // req.body.data 는 request에서 보내는 이름으로 가져오면 된다. 
  // request에 보낸게 { "key": "123" } 이면 req.body.key로 뽑아야한다.

  if (req.body.data == null || req.body.data == undefined) {
    res.status(400).json({
      status: {
        message: "data값이 없습니다.",
        code: res.statusCode
      }  
    })
    return;
  }
  let newData = req.body;
  newData.id = arr.length;

  arr.push(newData);
  res.status(200).json({
    status: {
      message: "create 성공",
      code: res.statusCode
    },
    
    result: arr // response에 data도 같이 담아서 보낸다.
  });
});

// PUT Method

router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  // const { data } = req.body;
  console.log("id : ", id, "length : ", arr.length);
  if (id >= arr.length) {
    res.status(400).json({
      status: {
        message: "인덱스 없음",
        code: res.statusCode
      }
    })
    return;
  }
  arr[id].data = req.body.data;
  res.status(200).json({
    status: {
      message: "update 성공",
      code: res.statusCode
    },
    result: arr // response에 data도 같이 담아서 보낸다.
  })
})

// DELETE Method

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    status: {
      message: "delete 성공",
      code: res.statusCode
    },
    result: arr // response에 data도 같이 담아서 보낸다.
  })
});

// Multipart Method

router.post("/upload", upload.single('image'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message : "upload success",
  })
})

module.exports = router;
