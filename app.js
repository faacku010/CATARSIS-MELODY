/* requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar */

const express = require('express');
const path = require('path');
const app = express();

/* importamos los distintos enrutadores */
const productoRouter = require('./src/routes/productoRouter.js');
const mainRouter =require('./src/routes/mainRouter.js');
const userRouter = require('./src/routes/userRouter.js');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* usando recursos estaticos */
app.use( express.static(path.resolve(__dirname, './public')));


/* usando los recursos estaticos */
app.use('/', mainRouter);
app.use('/productos', productoRouter);
app.use('/usuarios', userRouter);



/* app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/index.html'));
})

app.get('/Product-detail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/productDetail.html'));
})

app.get('/Product-cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/productCart2.html'));
})

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
})
 */

/* ponemos a escuchar el servidor */
app.listen(3020,() => {
    console.log('servidor corriendo en puerto https://localhost:3020');
});