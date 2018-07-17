var socket = io();

socket.on('connect', function () {
  console.log("Connected to server")

  socket.emit('createMessage', {
    to: 'abcd',
    message: 'Hey there!!!'
  })
});

socket.on('disconnect', function (){
  console.log('Disconnected from server')
});

socket.on('newMessage', function (newMessage) {
  console.log(newMessage)
});
