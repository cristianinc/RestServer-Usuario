const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true,'La descripcion es necesaria']
    }
});

module.exports = mongoose.model('Categoria', categoriaSchema);