import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda.service';
import { NgForm } from '@angular/forms';
import { TiendaModule } from 'src/app/modelos/tienda/tienda.module';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css'],
  providers: [TiendaService],
})

export class TiendasComponent implements OnInit {

  constructor(public tiendaService:TiendaService) { }

  ngOnInit(): void {
    this.getTienda();
  }
  
  getTienda(){
    this.tiendaService.getTienda().subscribe((res)=>{
      this.tiendaService.tiendag= res;
      console.log(this.tiendaService.tiendag);
    });
  }

  addTienda(form?:NgForm){
    if(form?.value._id){
      this.tiendaService.putTienda(form?.value).subscribe((res)=>{
        this.tiendaService.tiendam= res;
        this.resetForm(form);
        this.getTienda();
        alert(this.tiendaService.tiendam.message);
        console.log('editar');
      });
    } else{
      this.tiendaService.postTienda(form?.value).subscribe(
        
        (res)=>{
        this.tiendaService.tiendam= res;
        this.getTienda();
        this.resetForm(form);
        alert(this.tiendaService.tiendam.message);
      },
      (err)=>{
        this.tiendaService.tiendam= err;
        this.getTienda();
        this.resetForm(form);
        alert(this.tiendaService.tiendam.error.message);
        
      }
      
      )
    }
  }

  editTienda(tienda:TiendaModule){
    this.tiendaService.selected= tienda;
  }

  deleteTienda(_id:String, form:NgForm){
    this.tiendaService.deleteTienda(_id).subscribe((res)=>{
      this.tiendaService.tiendam= res;
      this.getTienda();
      this.resetForm(form);
      alert(this.tiendaService.tiendam.message);
    })
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.tiendaService.selected=new TiendaModule();
    }
  }

}