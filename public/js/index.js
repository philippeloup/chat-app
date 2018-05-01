var socket = io();

socket.on('connect', function ()  {
  console.log('Connected to server');
//
//   socket.emit('createMessage', {
//     from: 'Andrew111',
//     text: 'What is up!'
//   })
});

socket.on('disconnect', function ()  {
  console.log('Disconnected from server');
});


socket.on('newMessage', function (email) {
  console.log('New email', email);
});
