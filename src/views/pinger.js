var app = require('express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(4113);

io.on('connection', function (socket) {
    //console.log('connected');
    socket.on('event_name', function (data) {
        //console.log(data);
        io.emit('event_name', data);
    });

});