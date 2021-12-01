import { Injectable } from '@angular/core';
import {AnimalitoModule} from '../modelos/animalito/animalito.module';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalitoService {
  selected:AnimalitoModule;
  readonly api="http://localhost:3000/animalitos";
  animalito!:AnimalitoModule[];
  animalitog:any;
  animalitom:any;

  constructor(public http:HttpClient) { 
    this.selected= new AnimalitoModule;
  }

  postAnimalito(animalitoModule:AnimalitoModule){
    return this.http.post(this.api, animalitoModule)
  }
  getAnimalito(){
    return this.http.get<AnimalitoModule[]>(this.api)
  }
  putAnimalito(animalitoModule:AnimalitoModule){
    return this.http.put(this.api+`/${animalitoModule._id}`, animalitoModule);
  }
  deleteAnimalito(_id:String){
    return this.http.delete(this.api+`/${_id}`);
  }

}
