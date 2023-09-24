import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { NavigationExtras, Router } from '@angular/router';
import { AlertController, IonProgressBar, LoadingController, NavController, ToastController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public state:string = "inactive";
  dato:string;



  constructor(public toastController: ToastController, private router:Router,public loadingController: LoadingController,public bdlocalservice: BdLocalService,public alertController: AlertController,
    public navCtrl: NavController) {

  }
  ngOnInit(){}


    async presentToast(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 3000
      });
      toast.present();
    }
   //validar los campos de Registrate
   user:string;
   password:string;
   email:string;
    Validar(){
      let navigationExtras: NavigationExtras={
        state:{user: this.user, password: this.password, email: this.email}
      }
      if(this.user.length>=5 && this.password.length>=8 && this.email.length>=6){
        this.presentLoadingWithOptions();
        this.loadingController.dismiss();
        //Guardar datos de los Registros!
        this.bdlocalservice.guardarRegistro(this.user,this.email,this.password);
        this.router.navigate(['/iniciosesion'],navigationExtras);




      }
    }
   //Loading
   async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 700,
      message: 'Cargando...',
      translucent: true,
      //cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  //obtener los datos del storage

 
  



}


