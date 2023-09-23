/* requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar */

const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

/* importamos los distintos enrutadores */
const productoRouter = require('./src/routes/productoRouter.js');
const userRouter = require('./src/routes/userRouter.js');
const mainRouter = require('./src/routes/MainRouter.js');

app.set('view engine', 'ejs'); /* define el motor que utilizamos en EJS */
app.set('views', path.resolve(__dirname, 'src/views')); /* define la ubicacion de la carpeta */

/* usando recursos estaticos */
app.use( express.static(path.resolve(__dirname, './public')));

/* CRUD */
app.use(express.urlencoded({ extended: false })); /* para poder recibir toda la data del body */
app.use(express.json()); /* para poder recibir toda la data del body */
app.use(methodOverride('_method')); /* para poder usar los metodos PUT y DELETE */
/* app.use((req, res, netxt) => {
	res.status(404).render('not-found')
}) */

/* usando los recursos estaticos */
app.use('/products', productoRouter);
app.use('/users', userRouter);
app.use('/', mainRouter);


/* ponemos a escuchar el servidor */
app.listen(3020,() => {
    console.log('servidor corriendo en puerto https://localhost:3020');
});