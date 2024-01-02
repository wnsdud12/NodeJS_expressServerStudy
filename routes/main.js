const express = require('express')

const member = require("../modules/members/memberRoutes");
const posting = require("../modules/postings/postingRoutes");
const user = require("../modules/users/userRoutes");

const app = express();

app.use('/member', member);
// app.use('/posting', posting);
// app.use('/user', user);

module.exports = app;
