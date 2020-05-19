 const express = require('express');
 const _ = require('underscore');

 const Categoria = require('../models/categoria');

//middleware
 const { verificaToken, verificaAdminRole } = require('../middlewares/autentificacion');


 const app = express();

app.get('/categoria', verificaToken, function(req, res) {
});


// //Todas las categorias
// app.get('/categoria', verificaToken, function(req, res) {
    
//     Usuario.find({ estado:true }, 'nombre email role estado google img')
//             .skip(desde)
//             .limit(limite)
//             .exec( (err, usuarios) => {
//                 if(err){
//                     return res.status(400).json({
//                         ok: false,
//                         err
//                     });
//                 }
                
//                 Usuario.count({estado:true}, (err, conteo) => {
//                     res.json({
//                         ok: true,
//                         usuarios,
//                         cuantos: conteo
//                     }); 
//                 })
                

//             })

// });

// //Solo una categoria por el ID
// app.get('/categoria/:id', verificaToken, function(req, res) {
//     //Categoria.findById
    
//     Usuario.find({ estado:true }, 'nombre email role estado google img')
//             .skip(desde)
//             .limit(limite)
//             .exec( (err, usuarios) => {
//                 if(err){
//                     return res.status(400).json({
//                         ok: false,
//                         err
//                     });
//                 }
                
//                 Usuario.count({estado:true}, (err, conteo) => {
//                     res.json({
//                         ok: true,
//                         usuarios,
//                         cuantos: conteo
//                     }); 
//                 })
                

//             })

// });


// app.post('/categoria', [verificaToken], function(req, res) {

//     let body = req.body;


//     let categoria = new Categoria({
//         descripcion: body.descripcion,
//         usuario: body.usuario_id,
//     });

//     categoria.save( (err, categoriaDB) => {
//         if(err){
//             return res.status(400).json({
//                 ok: false,
//                 err
//             });
//         }

//         res.json({
//             ok: true,
//             usuario: categoriaDB
//         });

//     });


// });

// app.put('/categoria/:id', [verificaToken, verificaAdminRole], function(req, res) {

//     let id = req.params.id;
//     let body = _.pick(req.body, ['caterogia']);

//     Usuario.findByIdAndUpdate (id, body, {new:true, runValidators:true}, (err, categoriaDB) => {
//         if(err){
//             return res.status(400).json({
//                 ok: false,
//                 err
//             });
//         }
        
//         res.json({
//             ok: true,
//             usuario: categoriaDB
//         });
//     });


// });


// app.delete('/categoria/:id', [verificaToken,verificaAdminRole],  function(req, res) {
    
//     let id = req.params.id;
//     let cambiaEstado = {estado:false};

//     Usuario.findByIdAndUpdate (id, cambiaEstado, {new:true}, (err, usuarioBorrado) => {
//         if(err){
//             return res.status(400).json({
//                 ok: false,
//                 err
//             });
//         }
//         if( !usuarioBorrado ){
//             return res.status(400).json({
//                 ok: false,
//                 err: {
//                     message: 'Usuario no encontrado'
//                 }
//             });
//         }        
//         res.json({
//             ok: true,
//             usuario: usuarioBorrado
//         });
//     });

// });



module.exports = app;