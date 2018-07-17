const express = require('express');
const app = new express();
var port = process.env.PORT || 3000;

const path = require('path');

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

app.listen(port, ()=>{
  console.log ("App Started in port : ", port);
});
