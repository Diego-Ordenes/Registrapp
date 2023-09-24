import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { APIAlumnoService } from 'src/app/services/apialumno.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
  
})


export class BienvenidoPage implements OnInit {
  usuario:string; //variable any(permite cualquier valor)
  constructor(private activerouter: ActivatedRoute,private router:Router,public loadingController: LoadingController,private api: APIAlumnoService) { 
    this.activerouter.queryParams.subscribe(params=>{ //lambda
      if(this.router.getCurrentNavigation().extras.state){ //verificar si hay valor
        this.usuario=this.router.getCurrentNavigation().extras.state.usuario;
        //console.log("que es esto: " + this.usuario)
      }
    });
    this.router.navigate(['bienvenido/asignatura'])
  }
  mensajes:any;

  ngOnInit() {
  }

     //Loading
     async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: 'crescent',
        duration: 500,
        message: 'Cerrando Sesion...',
        translucent: true,
        //cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }
    //Componentes = Click nos lleva donde presionamos
    segmentChanged(event: any){
      console.log(event);
      let ruta=event.detail.value
      let navigationExtras: NavigationExtras={
        state: {mensaje: this.mensajes}
      }
      this.router.navigate(['bienvenido/'+ruta], navigationExtras)
      
    }
  
}
