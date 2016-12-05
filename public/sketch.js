var socket;


function setup() {
    createCanvas(displayWidth, displayHeight);
    socket = io.connect('http://localhost:3010');
}

function draw() {
    background(0);

}


function mouseDragged(){
  fill(255);
  ellipse(touchX,touchY, 100, 100);

  //Create a message to send

  var data = {
    x: touchX,
    y: touchY
  }

  socket.emit('mouse', data);
  console.log(data);
}
