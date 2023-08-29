/* requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar */

const express = require('express');
const path = require('path');
const app = express();

/* importamos los distintos enrutadores */
/* const rutasProductos = require('./routes/productos.js'); */
/* const mainRouter =require('./routes/mainRouter.js'); */
/* const registerRouter = require('./routes/registerRouter.js');
const loginRouter = require('./routes/loginRouter.js');
const carritoRouter  = require('./controllers/carritoController.js');
 */

app.listen(3020,() => {
    console.log('servidor corriendo en puerto https://localhost:3020');
});


/* usando recursos estaticos */
app.use( express.static(path.resolve(__dirname, './public')));


/* usando los recursos estaticos */
/* app.use('/', mainRouter); */
/* app.use('/productos', rutasProductos);
app.use('/registro', registerRouter);
app.use('/login', loginRouter);
app.use('/carrito', carritoRouter); */


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/index.html'));
})

app.get('/Product-detail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/productDetail.html'));
})

app.get('/Product-cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/productCart.html'));
})

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
})

app.get('/practica', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/practica.html'));
})

app.get('/doc', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/doc.html'));
})


/* ponemos a escuchar el servidor */
