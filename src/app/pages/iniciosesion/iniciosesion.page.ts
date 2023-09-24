
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { isPlatform, LoadingController, NavController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {
  usuario:string;
  constructor(private router:Router,private activerouter: ActivatedRoute,public loadingController: LoadingController,
    public bdlocalservice: BdLocalService,public navCtrl: NavController) { }

  ngOnInit() {
  }

  Restablecer(){
    this.router.navigate(['/restablecer']);
  };





  //validar los datos de inicio sesion
  password:string;
  user: string;
  email: string;
   Validar(){
     let navigationExtras: NavigationExtras={
       state:{usuario: this.usuario, password: this.password}
     }
     if(this.usuario.length>=5 && this.password.length>=8){
      this.presentLoadingWithOptions();
       this.loadingController.dismiss();
       this.bdlocalservice.ValidarRegistro(this.usuario,this.password);
       let navigationextras: NavigationExtras={
        state:{usuario: this.usuario}//asgigno un elemento y valor
      };
       this.router.navigate(['/bienvenido'],navigationExtras);
     }
   }
   //Loading
   async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 700,
      message: 'Iniciando Sesion...',
      translucent: true,
      //cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  //
  iniciarsesion(){
    let navigationExtras: NavigationExtras={
      state:{usuario: this.usuario, password: this.password}
    }
    this.bdlocalservice.ValidarRegistro(this.usuario,this.password);
    console.log(this.usuario);
    //this.router.navigate(['/bienvenido'],navigationExtras);
  }

  



}
  

  
  


  



