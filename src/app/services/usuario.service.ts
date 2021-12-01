import { Injectable } from '@angular/core';
import {UsuarioModule} from '../modelos/usuario/usuario.module';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  selected:UsuarioModule;
  readonly api="http://localhost:3000/usuarios";
  usuario!:UsuarioModule[];
  usuariog:any;
  usuariom:any;

  constructor(public http:HttpClient) { 
    this.selected= new UsuarioModule;
  }

  postUsuario(usuarioModule:UsuarioModule){
    return this.http.post(this.api, usuarioModule)
  }
  getUsuario(){
    return this.http.get<UsuarioModule[]>(this.api)
  }
  putUsuario(usuarioModule:UsuarioModule){
    return this.http.put(this.api+`/${usuarioModule._id}`, usuarioModule);
  }
  deleteUsuario(_id:String){
    return this.http.delete(this.api+`/${_id}`);
  }

}
