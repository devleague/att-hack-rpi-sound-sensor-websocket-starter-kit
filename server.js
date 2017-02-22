const express = require('express');
const app = express();
const wpi = require('wiring-pi');
const expressWs = require('express-ws')(app);

// Setup pi connection to the pins
const PCF = 120;
wpi.wiringPiSetup ();
// Setup pcf8591 on base pin 120, and address 0x48
wpi.pcf8591Setup (PCF, 0x48);

const detectSound = () => {
  return wpi.analogRead(PCF + 0);
};

// static html files in public directory
app.use(express.static('./public'));

// listen for websocket connections on the root URI
app.ws('/', function(ws, req) {
  ws.on('message', (message) => {
    console.log(`received: ${message}`);
  });

  ws.on('end', () => {
    console.log('Connection ended...');
  });

  // ws.send('Hello Client');

    var inter = setInterval(() => {
      try {
        ws.send(detectSound());
      } catch (err) {
        clearInterval(inter)
        ws.close();
        console.log('Connection errored...', err);
      }
    }, 50);
});

app.listen(3001, () => {
  console.info('Server started on port 3001');
});

