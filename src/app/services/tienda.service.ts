import { Injectable } from '@angular/core';
import { TiendaModule } from '../modelos/tienda/tienda.module';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  selected:TiendaModule;
  readonly api="http://localhost:3000/tiendas";
  tienda!:TiendaModule[];
  tiendag:any;
  tiendam:any;

  constructor(public http:HttpClient) { 
    this.selected= new TiendaModule;
  }

  postTienda(tiendaModule:TiendaModule){
    return this.http.post(this.api, tiendaModule)
  }
  getTienda(){
    return this.http.get<TiendaModule[]>(this.api)
  }
  putTienda(tiendaModule:TiendaModule){
    return this.http.put(this.api+`/${tiendaModule._id}`, tiendaModule);
  }
  deleteTienda(_id:String){
    return this.http.delete(this.api+`/${_id}`);
  }

}