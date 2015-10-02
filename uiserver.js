var net = require('net');
var express = require('express');
var app = express();
app.use('/static', express.static(__dirname + '/public'));

var http = require('http').Server(app);

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');

});

app.get('/open', function(req, res){
   var client = net.connect({host:'10.0.0.14',port: 1000},
       function() { //'connect' listener
     console.log('connected to server!');
     client.write('a');
     console.log('Door is open now.');
   });
   res.send('door is opend');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


// client.on('data', function(data) {
//   console.log(data.toString());
//   client.end();
// });
// client.on('end', function() {
//   console.log('disconnected from server');
// });
