/**
 * Created by andre on 08/11/2016.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var marcador = {
    Livorno: 0,
    StPauli: 0
};

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    socket.on('Gol Livorno', function(){
        marcador.Livorno+=1;
        io.emit('dibuixarmarcador', marcador);
    });
    socket.on('Gol St. Pauli', function(){
        marcador.StPauli+=1;
        io.emit('dibuixarmarcador', marcador);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
