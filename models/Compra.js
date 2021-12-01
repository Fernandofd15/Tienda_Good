const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comprasSchema = new Schema({
    
    idUsuario:{
        type: Schema.ObjectId,
        ref:'Usuario',
        autopopulate:true,
    },
    idAnimalito:{
        type: Schema.ObjectId,
        ref:'Animalito',
        autopopulate:true,
    },
    idTienda:{
        type: Schema.ObjectId,
        ref:'Tienda',
        autopopulate:true,
    },
    dteFechaCompra:{
        type: Date,
        default:Date.now,
    },
    nmbPrecio:{
        type:Number,
    },
    blnActivo:{
        type: Boolean,
        default:true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    uptdatedAt:{
        type: Date,
        default: Date.now,
    },
    
});

module.exports = mongoose.model('Compra', comprasSchema);
comprasSchema.plugin(require('mongoose-autopopulate'));