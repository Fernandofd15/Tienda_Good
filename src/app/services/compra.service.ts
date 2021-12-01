import { Injectable } from '@angular/core';
import { CompraModule } from '../modelos/compra/compra.module';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompraService {
  selected:CompraModule;
  readonly api="http://localhost:3000/compras";
  compra!:CompraModule[];
  comprag:any;
  compram:any;

  constructor(public http:HttpClient) { 
    this.selected= new CompraModule;
  }

  postCompra(compraModule:CompraModule){
    return this.http.post(this.api, compraModule)
  }
  getCompra(){
    return this.http.get<CompraModule[]>(this.api)
  }
  putCompra(compraModule:CompraModule){
    return this.http.put(this.api+`/${compraModule._id}`, compraModule);
  }
  deleteCompra(_id:String){
    return this.http.delete(this.api+`/${_id}`);
  }

}