/* requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar */

const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

/* importamos los distintos enrutadores */
const productoRouter = require('./src/routes/productoRouter.js');
const mainRouter =require('./src/routes/mainRouter.js');
const userRouter = require('./src/routes/userRouter.js');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* usando recursos estaticos */
app.use( express.static(path.resolve(__dirname, './public')));

/* CRUD */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
/* app.use((req, res, netxt) => {
	res.status(404).render('not-found')
}) */

/* usando los recursos estaticos */
app.use('/', mainRouter);
app.use('/productos', productoRouter);
app.use('/usuarios', userRouter);


/* ponemos a escuchar el servidor */
app.listen(3020,() => {
    console.log('servidor corriendo en puerto https://localhost:3020');
});