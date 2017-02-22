let volArr = [];

var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            ['Volume', 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ],
        ]
    },
    axis: {
      y: {
        max: 200,
        min: 100,
      }
    }
});
let prevArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, ];
setInterval(function () {
  let newVolArr = [
    prevArr[1],
    prevArr[2],
    prevArr[3],
    prevArr[4],
    prevArr[5],
    prevArr[6],
    prevArr[7],
    prevArr[8],
    prevArr[9],
    volArr.shift(),
  ];
  console.log(newVolArr)
  chart.load({
      columns: [
        ['Volume',
          newVolArr[0],
          newVolArr[1],
          newVolArr[2],
          newVolArr[3],
          newVolArr[4],
          newVolArr[5],
          newVolArr[6],
          newVolArr[7],
          newVolArr[8],
          newVolArr[9],
        ],
      ]
  });
  prevArr = newVolArr;
}, 10);

console.log('open: ');

const ws = new WebSocket("ws://df6a9d23.ngrok.io/");

ws.onopen = function (event) {
  console.log('Connection is open ...');
  ws.send("Hello Server");
};

ws.onerror = function (err) {
  console.log('err: ', err);
};

ws.onmessage = function (event) {
  volArr.push(parseInt(event.data));
  let soundBar = document.getElementById('soundBar');
  soundBar.style.height = event.data + 'px';
};

ws.onclose = function() {
  console.log("Connection is closed ...");
};