const { ObjectId } = require('mongoose').Types;
const memberModel = require('./memberModel');

const getMemberById = async (req, res) => {
  const {id} = req.query;
  console.log("id : ", id);
  try {
    console.log("is valid : ", ObjectId.isValid(id));
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "id를 입력해주세요.",
        data: null
      })
    }
    const result = await memberModel.findById(id);
    console.log("result : ", result);
    if (!result) {
      return res.status(404).json({
        message: "user not found",
        data: result,
      });
    }
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: error,
    });
  }
};

const getMemberList = async (req, res) => {
  try {
    const result = await memberModel.find();
    res.status(200).json({
      data: result
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
}

module.exports = {
  getMemberById,
  getMemberList
}