const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creación modelo Hijo
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

 //Creación Modelo Padre
const tiendasSchema = new Schema({
strNombre:{
    type: String,
    trim:true,
    },
strDireccion:{
    type:String,
    trim:true,
},
strTelefono:{
    type:String,
    trim:true,
    
},
strUrlWeb:{
    type:String,
    trim:false,
    default: null,
},
arrAnimalitosDisponibles: [{
    idAnimalito:{
        type: Schema.ObjectId,
        ref:'Animalito',
        autopopulate:true,
    },
}],
//Declaración de subdocumento dentro de aJsnCompra.
aJsnCompra: [comprasSchema],
    
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
child: comprasSchema
});

module.exports = mongoose.model('Tienda', tiendasSchema);
tiendasSchema.plugin(require('mongoose-autopopulate'));