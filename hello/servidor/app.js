var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var najax = require('najax');
var url_ajax = "datos.php";
app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.on('cliente_opcion', function (data) {
    console.log(data);
    if(data["value_client"] == "lista_clientes" )
    {
      najax({ url:'http://localhost:8080/cordova/datos.php',
              type:'POST',
              data: ({ opcion : "buscar", coordenadas : ""}),
              success: function(html){
                console.log(html);
                socket.emit('servidor_respuesta', { value_server: html });
              }
            });
    }
    if(data["value_client"] == "preferencia_cliente" )
    {
      socket.emit('servidor_respuesta', { value_server: 'funciono2' });
    }
    if(data["value_client"] == "maps_cliente" )
    {
      socket.emit('servidor_respuesta', { value_server: 'funciono3' });
    }
  });

});




