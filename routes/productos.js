let express = require('express');

let router = express.Router();


router.get('/:idProducto', function(req, res) {
    res.send('Bienvenidos al detalle del producto ' + req.params.idProducto);
});

router.get('/:idProducto/comentarios/:idComentario?', function(req, res) {
    if (req.params.idComentario == undefined) {
        res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto + ' y estas enfocado en el comentario ' + req.params.idComentario); 
    } else {
        res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto + ' y estas enfocado en el comentario ' + req.params.idComentario);
    }
});

module.exports = router;