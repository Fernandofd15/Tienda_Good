export class UsuarioModule {
  constructor(_id="", strNombre="", strApellidos="", nmbEdad=0,
  strCorreo="", strDireccion="", strTelefono="", arrMascotas=[],
 ){
  this._id=_id;
  this.strNombre=strNombre;
  this.strApellidos=strApellidos;
  this.nmbEdad=nmbEdad;
  this.strCorreo=strCorreo;
  this.strDireccion=strDireccion;
  this.strTelefono=strTelefono;
  this.arrMascotas=arrMascotas;

} 
_id:String;
strNombre:String;
strApellidos:String;
nmbEdad:Number;
strCorreo:String;
strDireccion:String;
strTelefono:String;
arrMascotas:Array<any>;

 }
