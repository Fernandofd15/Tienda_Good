const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
strNombre:{
    type: String,
    trim:true,
    },
strApellidos:{
    type:String,
    trim:true,
    
},
nmbEdad:{
    type:Number,
},
strCorreo:{
    type:String,
    trim:true,
    unique:true,
    lowercase:true,
},
strDireccion:{
    type:String,
    trim:true,
},
strTelefono:{
    type:String,
    trim:true,
},
arrMascotas: [{
    idAnimalito:{
        type: Schema.ObjectId,
        ref:'Animalito',
        autopopulate:true,
    },
}],
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

module.exports = mongoose.model('Usuario', usuariosSchema);
usuariosSchema.plugin(require('mongoose-autopopulate'));