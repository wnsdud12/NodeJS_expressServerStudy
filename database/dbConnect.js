const mongoose = require('mongoose')

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Connected to mongodb server");
})
console.log("connect mongoose");

async function connectDB() {
  try {
    mongoose.connect('mongodb://root:root@localhost:27017/admin', {
      dbName: 'mongo',
      // useNewUrlParser: true,
      // userCreateIndex: true,
    });
    console.log('몽고디비 연결 성공');
  } catch (error) {
    console.error('몽고디비 연결 에러', error);
  }
};

connectDB();

module.exports = db