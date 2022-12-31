const express = require("express");
const redis = require("redis");

// 레디스 클라이언트 생성
const client = redis.createClient({
  host: "",
  port: 6379,
});

const app = express();
app.listen(9060);

console.log("server start !!!!!!!!!!!");
