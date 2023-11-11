/* requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar */
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const userLoggedMiddleware = require('./src/middlewares/global/userLoggedMiddleware');
/* importamos los distintos enrutadores */
const mainRouter = require('./src/routes/MainRouter.js');
/* const productoRouter = require('./src/routes/productoRouter.js'); */
const productoRouter = require('./src/routes/productoRouter.js');
const userRouter = require('./src/routes/userRouter.js');
const userRouter2 = require('./src/routes/userRouter2.js');
const { cookie } = require('express-validator');

app.set('view engine', 'ejs'); /* define el motor que utilizamos en EJS */
app.set('views', path.resolve(__dirname, 'src/views')); /* define la ubicacion de la carpeta */

/* usando recursos estaticos */
app.use( express.static(path.resolve(__dirname, './public')));

/* CRUD */
app.use(express.urlencoded({ extended: false })); /* para poder recibir toda la data del body */
app.use(express.json()); /* para poder recibir toda la data del body */
app.use(cookieParser());
app.use(methodOverride('_method')); /* para poder usar los metodos PUT y DELETE */
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  }))


app.use(userLoggedMiddleware);
/* app.use((req, res, next) => {
	res.status(404).render('not-found')
}) */

/* usando los recursos estaticos */
app.use('/', mainRouter);
app.use('/productos', productoRouter); // 
/* app.use('/products', productoRouter); */
app.use('/users2', userRouter2);
app.use('/users', userRouter);


/* ponemos a escuchar el servidor */
app.listen(3030,() => {
    console.log('servidor corriendo en puerto http://localhost:3030/');
});