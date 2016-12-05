var express = require('express');
var app = express();

var server = app.listen(3010);


app.use(express.static('public'));
console.log("My server is working");

var socket = require('socket.io');

//Keep track of messages in and out
var io = socket(server);

//Deal with events
//New connection.
io.sockets.on('connection', newConnection);

//new socket connect
function newConnection(){
  console.log(socket.id);

  //Message called mouse trigger this function
  socket.on('mouse', mouseMsg);
}

function mouseMsg(data) {

  console.log(data);

}
