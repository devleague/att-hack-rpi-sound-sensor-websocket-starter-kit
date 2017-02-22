const express = require('express');
const app = express();
const wpi = require('wiring-pi');
const expressWs = require('express-ws')(app);

// Setup pi connection to listen to pin 120
const PCF = 120;
wpi.wiringPiSetup();

// Setup pcf8591 on base pin 120, and address 0x48
wpi.pcf8591Setup (PCF, 0x48);

// We will use this function to get a read of the digital sound reading from our Sound Sensor
const detectSound = () => {
  return wpi.analogRead(PCF + 0);
};

// static html files in public directory
app.use(express.static('./public'));

// listen for websocket connections on the root URI
app.ws('/', function(ws, req) {

  // Event Listener waiting for a message to come in over the socket connection
  ws.on('message', (message) => {
    console.log(`received: ${message}`);
  });

  // Event Listener waiting for the connection to close
  ws.on('end', () => {
    console.log('Connection ended...');
  });

  // Every 50 ms we will get a reading from our sound sensor and send it to the webpage via websocket
  setInterval( () => {
    ws.send(detectSound());
  }, 50);
});

// Our server will be listening on port 3001
app.listen(3001, () => {
  console.info('Server started on port 3001');
});

