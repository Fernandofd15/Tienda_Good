const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const animalitosController = require('../controllers/animalitosController');
const tiendasController = require('../controllers/tiendasController');
const comprasController = require('../controllers/comprasController');



module.exports = function(){
   //post:usuarios
   router.post('/usuarios', usuariosController.add);
   // get: /usuarios
   router.get('/usuarios', usuariosController.list);
   
   //leer usuario
   //get: /usuarios/:id
   router.get('/usuarios/:id', usuariosController.show);
   
   //Put:/usuarios/:id
   router.put('/usuarios/:id', usuariosController.update);
   // delete:/usuarios/:id
   router.delete('/usuarios/:id', usuariosController.delete);
  
   //Animalitos
  router.post('/animalitos', 
   animalitosController.fileUpload,
   animalitosController.add
   );
   router.get('/animalitos', animalitosController.list);
   router.get('/animalitos/:id', animalitosController.show);
   router.put('/animalitos/:id', 
   animalitosController.fileUpload,
   animalitosController.update);
   router.delete('/animalitos/:id', animalitosController.delete);

   router.post('/tiendas', tiendasController.add);
   router.get('/tiendas', tiendasController.list);
    //Put:/usuarios/:id
    router.put('/tiendas/:id', tiendasController.update);
    router.get('/tiendas/:id', tiendasController.show);
    router.delete('/tiendas/:id', tiendasController.delete);



   router.post('/compras', comprasController.add);
   router.get('/compras', comprasController.list);
    //Put:/usuarios/:id
    router.put('/compras/:id', comprasController.update);
    router.get('/compras/:id', comprasController.show);
    router.get('/compras/:idTienda/tienda', comprasController.showIdTienda);
    router.delete('/compras/:id', comprasController.delete);
    return router; 
}