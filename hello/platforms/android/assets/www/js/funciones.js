function cambiar_pag(id_pagina)
{
    
    if(id_pagina == "home-main")
    {
        $('#home-main').css("display","inherit");
        $('#prefer-main').css("display","none");
        $('#perfil-main').css("display","none");
        socket.emit('cliente_opcion', { value_client: 'lista_clientes' });
        socket.on('servidor_respuesta', function (data) {
            alert(data['value_server'])
                //socket.emit('cliente', { value: 'lista_clientes' });
        });
    }
    if(id_pagina == "prefer-main")
    {
        $('#home-main').css("display","none");
        $('#prefer-main').css("display","inherit");
        $('#perfil-main').css("display","none");
        socket.emit('cliente_opcion', { value_client: 'preferencia_cliente' });
        socket.on('servidor_respuesta', function (data) {
            alert(data['value_server'])
                //socket.emit('cliente', { value: 'lista_clientes' });
        });
    }
    if(id_pagina == "perfil-main")
    {
        $('#home-main').css("display","none");
        $('#prefer-main').css("display","none");
        $('#perfil-main').css("display","inherit");
        socket.emit('cliente_opcion', { value_client: 'maps_cliente' });
        socket.on('servidor_respuesta', function (data) {
            alert(data['value_server'])
                //socket.emit('cliente', { value: 'lista_clientes' });
        });
    }
}

