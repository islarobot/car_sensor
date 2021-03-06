
//https://stackabuse.com/node-js-websocket-examples-with-socket-io/

var app = require('express')();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);
var ipc=require('node-ipc');


var global_socket_ipc;
var global_socket_http;
var connection_stablished_http=0;
var connection_stablished_ipc=0;
 
ipc.config.id   = 'world';
ipc.config.retry= 1500;
ipc.config.silent = true;


app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080);


io.on('connection', function(socket) {  

	global_socket_http = socket;
	connection_stablished_http = 1;
    //socket.emit('announcements', { message: 'A new user has joined!' });

		//console.log("Cliente conectado "+global_socket_http);
/////// RECIBO DE HTML

    socket.on('event', function(data) {
        console.log('--> 1 --> ', data);

        if (connection_stablished_ipc==1) {
			ipc.server.emit(global_socket_ipc,'message',data);
			//console.log('envio'+data.message)
        }
        
        
    });
});



ipc.serve();

ipc.server.start();

ipc.server.on('start',function(){console.log('start');});

ipc.server.on('connect',function(socket){
	
//ipc.server.emit(socket,'message','CONECTADO!!!!');

global_socket_ipc = socket;
connection_stablished_ipc = 1;

});



ipc.server.on('message',function(data){
	
console.log('---> 7 ----> '+data);
 if (connection_stablished_http==1) {
    global_socket_http.emit('stream', data);
}
});
    
    
    
    