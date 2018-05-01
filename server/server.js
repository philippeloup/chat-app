require('./config');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'mike2000',
    text: 'Hey, What is going on?',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createEmail', newMessage);
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  })
});


server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
