import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { TargetLocator } from 'selenium-webdriver';
import { APIAlumnoService } from 'src/app/services/apialumno.service';



@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit{
  
  mensajes:any;
  user:any;
  users:any;
  posts:any;
  post:any={
    id:null,
    title:"",
    message:"",
    userId:null
  };
  constructor(private api: APIAlumnoService,private router:Router,public loadingController: LoadingController,public toastController: ToastController,
    private activatedroute: ActivatedRoute) {
  }
  Volver(){  
    this.router.navigate(['/bienvenido']);
  }

  ngOnInit(){
  /*  this.api.getPosts().subscribe((user)=>{
      var index = user.findIndex(x=> )
    })
     
  }*/
}
  ionViewWillEnter(){
    this.getUsuarios();
    this.getPosts();
  }
  //obtener usuarios
  getUsuarios(){
   this.api.getUsuarios().subscribe((data)=>{
     this.users=data;
   })
  }
  

  getUsuario(userId){
    this.api.getUsuario(userId).subscribe((data)=>{
     this.user=data;
    })
  }

  getPosts(){
    this.api.getPosts().subscribe((data)=>{
      this.posts=data;
      this.posts.reverse();
    })
  }
  eliminarMensajes(id){
    this.api.deletePost(id).subscribe(()=>{});
    this.getPosts();
  }

  /*eliminarPost(id: number, index: number){
    this.api.deletePost(id).subscribe((data)=>{
      this.mensajes.splice(index,1);
      this.mensajes = this.mensajes.filter(post => post.id !=id);

      console.log("Se borro")
    });
  }*/
 
  //Selecciona un usuario para poder crear un post con el
  guardarPost(){
    if (this.post.userId==null) {
      if(this.user===undefined){
        this.presentToast("Seleccione un usuario")
        return;
      }
      this.post.userId=this.user.id;
      this.api.createPost(this.post).subscribe(
        ()=>{
          this.presentToast("Mensaje Creado Correctamente")
          this.getPosts();
        },
        error=>{
          console.log("Error: "+error)
        });
    } else {
      this.api.updatePost(this.post.id,this.post).subscribe(
        ()=>{
          this.presentToast("Actualizacion con exito")
          this.getPosts();
        },
        error=>{
          console.log("Error: "+error)
        }
      );
    }
  }
  
//mensaje enviado...
async presentToast(mensaje:string) {
  const toast = await this.toastController.create({
    message: mensaje,
    translucent:true,
    color:'medium',
    position: 'top',
    duration: 2000
  });
  toast.present();
}
  
 

}
