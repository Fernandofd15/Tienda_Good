import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { NgForm } from '@angular/forms';
import { CompraModule } from 'src/app/modelos/compra/compra.module';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
  providers: [CompraService],
})

export class ComprasComponent implements OnInit {

  constructor(public compraService:CompraService) { }

  ngOnInit(): void {
    this.getCompra();
  }
  
  getCompra(){
    this.compraService.getCompra().subscribe((res)=>{
      this.compraService.comprag= res;
      console.log(this.compraService.comprag);
    });
  }

  addCompra(form?:NgForm){
    if(form?.value._id){
      this.compraService.putCompra(form?.value).subscribe((res)=>{
        this.compraService.compram= res;
        this.resetForm(form);
        this.getCompra();
        alert(this.compraService.compram.message);
        console.log('editar');
      });
    } else{
      this.compraService.postCompra(form?.value).subscribe(
        
        (res)=>{
        this.compraService.compram= res;
        this.getCompra();
        this.resetForm(form);
        alert(this.compraService.compram.message);
      },
      (err)=>{
        this.compraService.compram= err;
        this.getCompra();
        this.resetForm(form);
        alert(this.compraService.compram.error.message);
        
      }
      
      )
    }
  }

  editCompra(compra:CompraModule){
    this.compraService.selected= compra;
  }

  deleteCompra(_id:String, form:NgForm){
    this.compraService.deleteCompra(_id).subscribe((res)=>{
      this.compraService.compram= res;
      this.getCompra();
      this.resetForm(form);
      alert(this.compraService.compram.message);
    })
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.compraService.selected=new CompraModule();
    }
  }

}