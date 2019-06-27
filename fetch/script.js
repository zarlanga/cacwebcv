/* 

AJAX (Asynchronous JavaScript And XML): es una técnica de JavaScript que nos va a permitir consultar información o enviar información desde y hacia un servidor externo de manera interactiva. 
Las aplicaciones se ejecutan en el cliente mientras se mantiene la comunicación asíncrona con el servidor en segundo plano.
La información que descargamos es usualmente un JSON. 

Objeto then: se ejecuta luego de la petición y en caso de haber más de uno se ejecuta uno detrás de otro.

Promesas: es una parte del código que se ejecuta solamente si la parte del código anterior se ha ejecutado bien. 
En la promesa capturamos el dato y luego se convierte en JSON un objeto de JS. 

Api: conjunto de métodos y funciones que las aplicaciones siguen para comunicarse entre si. 


Fetch: con esta función podemos consumir un servicio en la nube (api) que nos entrega un resultado JSON del lado del backend para consumir en nuestro frontend. 
Por ende permite hacer pedidos AJAX sin necesidad de tener la librería jQuery de forma fácil y rápida.
Fetch hace promesas a través de un Then. 


Link de ejemplos de datos a usar: https://randomuser.me/ 


*/

 var contenido = document.querySelector('#contenido')
        function obtener() {
            fetch('https://randomuser.me/api/') // se indicará la URL del destino. 
            .then(data => data.json()) //en la 1er promesa tomaremos una data y nos trae una respuesta transformada en formato JSON. 

            .then(data => { // Con otra promesa, la respuesta anterior la vamos a leer y la plasmamos en #contenido.

                console.log(data.results[0]);
				
				//console.log(data.results['0'].email);
			contenido.innerHTML += '<br><img src="'+ data.results[0].picture.large +'">';
			contenido.innerHTML += '<p>'+ data.results[0].name.first + '</p>';
			contenido.innerHTML += '<p>'+ data.results[0].name.last + '</p>';
			contenido.innerHTML += '<p>'+ data.results[0].email + '</p>';
			contenido.innerHTML += '<p>'+ data.results[0].location.street + '</p>';
            }) // vamos a acceder a la posición 0, de Results para extraer los datos existentes.
        }





/* 
Tarea
Teniendo en cuenta la API compartida anteriormente, deberán mostrar como resultado el nombre, email, dirección y a su vez la foto del usuario.

*/







// var contenido = document.querySelector('#contenido')
// function obtener() {
//     fetch('https://randomuser.me/api/')  
//     .then(data => data.json()) 
//     .then(data => { 
//         console.log(data.results['0'].email);
//         contenido.innerHTML = `<img src="${data.results['0'].picture.large}">
//         `
//     })
// }