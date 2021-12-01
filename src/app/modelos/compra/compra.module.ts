export class CompraModule { 
  constructor(_id="", idAnimalito="", idUsuario="", idTienda="",
  nmbPrecio=0, 
  ){
  this._id=_id;
  this.idAnimalito=idAnimalito;
  this.idUsuario=idUsuario;
  this.idTienda=idTienda;
  this.nmbPrecio=nmbPrecio;

} 
_id:String;
idUsuario:String;
idAnimalito:String;
idTienda:String;
nmbPrecio:Number;
}
