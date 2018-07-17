const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = new express();
var port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

const server = http.createServer(app);
var io = new socketIO(server);

io.on('connect', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Giri',
    text: 'Hey, whats up!!',
    createdAt: new Date()
  });

  socket.on('createMessage', (message)=>{
    console.log(message);
  })
  socket.on('disconnect', ()=>{
    console.log('user Disconnected');
  });
});

server.listen(port, ()=>{
  console.log ("App Started in port : ", port);
});
