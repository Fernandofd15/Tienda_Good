import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { UsuarioModule } from 'src/app/modelos/usuario/usuario.module';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuarioService],
})
export class UsuariosComponent implements OnInit {

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.getUsuario();
  }
  
  getUsuario(){
    this.usuarioService.getUsuario().subscribe((res)=>{
      this.usuarioService.usuariog= res;
      console.log(this.usuarioService.usuariog);
    });
  }

  addUsuario(form?:NgForm){
    if(form?.value._id){
      this.usuarioService.putUsuario(form?.value).subscribe((res)=>{
        this.usuarioService.usuariom= res;
        this.resetForm(form);
        this.getUsuario();
        alert(this.usuarioService.usuariom.message);
        console.log('editar');
      });
    } else{
      this.usuarioService.postUsuario(form?.value).subscribe(
        
        (res)=>{
        this.usuarioService.usuariom= res;
        this.getUsuario();
        this.resetForm(form);
        alert(this.usuarioService.usuariom.message);
      },
      (err)=>{
        this.usuarioService.usuariom= err;
        this.getUsuario();
        this.resetForm(form);
        alert(this.usuarioService.usuariom.error.message);
        
      }
      
      )
    }
  }

  editUsuario(usuario:UsuarioModule){
    this.usuarioService.selected= usuario;
  }

  deleteUsuario(_id:String, form:NgForm){
    this.usuarioService.deleteUsuario(_id).subscribe((res)=>{
      this.usuarioService.usuariom= res;
      this.getUsuario();
      this.resetForm(form);
      alert(this.usuarioService.usuariom.message);
    })
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.usuarioService.selected=new UsuarioModule();
    }
  }

}
