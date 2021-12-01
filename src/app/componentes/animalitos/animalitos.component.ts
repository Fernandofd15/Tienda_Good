import { Component, OnInit } from '@angular/core';
import { AnimalitoService } from 'src/app/services/animalito.service';
import { NgForm } from '@angular/forms';
import { AnimalitoModule } from 'src/app/modelos/animalito/animalito.module';

@Component({
  selector: 'app-animalitos',
  templateUrl: './animalitos.component.html',
  styleUrls: ['./animalitos.component.css'],
  providers: [AnimalitoService],
})
export class AnimalitosComponent implements OnInit {

  constructor(public animalitoService:AnimalitoService) { }

  ngOnInit(): void {
    this.getAnimalito();
  }
  
  getAnimalito(){
    this.animalitoService.getAnimalito().subscribe((res)=>{
      this.animalitoService.animalitog= res;
      console.log(this.animalitoService.animalitog);
    });
  }

  addAnimalito(form?:NgForm){
    if(form?.value._id){
      this.animalitoService.putAnimalito(form?.value).subscribe((res)=>{
        this.animalitoService.animalitom= res;
        this.resetForm(form);
        this.getAnimalito();
        alert(this.animalitoService.animalitom.message);
        console.log('editar');
      });
    } else{
      this.animalitoService.postAnimalito(form?.value).subscribe((res)=>{
        this.animalitoService.animalitom= res;
        this.getAnimalito();
        this.resetForm(form);
        alert(this.animalitoService.animalitom.message);
      })
    }
  }

  editAnimalito(animalito:AnimalitoModule){
    this.animalitoService.selected= animalito;
  }

  deleteAnimalito(_id:String, form:NgForm){
    this.animalitoService.deleteAnimalito(_id).subscribe((res)=>{
      this.animalitoService.animalitom= res;
      this.getAnimalito();
      this.resetForm(form);
      alert(this.animalitoService.animalitom.message);
    })
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.animalitoService.selected=new AnimalitoModule();
    }
  }

}