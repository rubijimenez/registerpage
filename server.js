// require busca dentro de todos los modulos de node (node modules) buscará el que se llame express, 
// express tiene un archivo main. Y la var express se le asigna lo que exporte ese mail
var express = require ('express');

// express es una función. Se le asigna a la variable app el valor que se le asigne a express.
// vamos a depender de la libreria express

var app = express();

// a la variable app se le asigna un complemento get. y se crea una función con parametros
// req y res este ultimo lo utilizamos para crear un "hola mundo"

// cuando accede a la ruta / se ejecuta la funcion: Esta funcion toma el parametro res (tipo response )
// y decirle que envie al cliente un hola mundo

app.get('/', function (req, res) {
	res.send('Hola mundo');
})

// lanzar el servidor web en el puerto 3000. 
//process.exit sirve para comunicanos que hubo un error y hacer un exit de nuestro proceso siendo distinto de 0.


app.listen(3000,function (err) {

	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Genial lo has logrado');

})