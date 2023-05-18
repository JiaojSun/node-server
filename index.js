//导入express
const express = require("express");
//创建web服务器
const app = express();
//将文件部署到服务器  win10: 172.12.253.154
app.use(express.static("img")); // http://192.168.0.100:9588/01.png
app.use(express.static("static")); // http://192.168.0.100:9588/app2/remoteEntry.js
// app.use(express.static("static")); // http://192.168.0.100:9588/app2/remoteEntry.js
// win10: http://172.12.253.154:9588/app2/remoteEntry.js

//get接口的开发 http://192.168.0.100:9588/api/list
app.get("/api/list", (err, res) => {
  res.send({
    code: 200,
    data: [
      { key: 1, name: 1 },
      { key: 2, name: 2 },
      { key: 3, name: 3 },
    ],
  });
});

// 通过ap.listen进行服务器的配置，并启动服务器，接收两个配置参数，一个是对应的端口号，一个是启动成功的回调函数
app.listen(9588, () => {
  console.log("服务器启动成功");
});
// inet 192.168.0.100 netmask 0xffffff00 broadcast 192.168.0.255
