const loginCheck = (req, res, next) => {
  console.log("begin loginCheck");
  const userLogin = true;
  if (userLogin) {
    next();
  } else {
    res.status(401).json({
      status: {
        message: "login fail",
        code: res.statusCode
      }
    })
  }
}

module.exports = loginCheck;