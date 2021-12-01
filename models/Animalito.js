const mongoose = require("mongoose");
const {Schema} = mongoose;
const animalitosSchema = new Schema({

strNombre:{
    type:String,
    trim:true,
    },
strTipoAnimal:{
    type:String,
    trim:true,
},
image:{
    type: String,
},
nmbEdad:{
    type:Number,
},
strSexo:{
    type: String,
    trim:true,
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

module.exports = mongoose.model('Animalito', animalitosSchema);