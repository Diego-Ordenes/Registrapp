import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
//import { strictEqual } from 'assert';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(private router:Router,public toastController: ToastController,public loadingController: LoadingController) { }

  ngOnInit() {}
  siguiente(){
   // this.router.navigate(['/iniciosesion']);
  }
  confirmar() {
    //this.presentToast("¡Contraseña Restablecida Correctamente!");
  } 
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500
    });
    toast.present();
  }



     //validar los campos de Registrate
     user:string;
     password:string;
     passwordnew:string;
      Validar(){
        let navigationExtras: NavigationExtras={
          state:{user: this.user, password: this.password, passwordnew: this.passwordnew}
        }
        if(this.user.length>=5 && this.password.length>=5 && this.passwordnew.length>=5){
          this.presentLoadingWithOptions();
          this.loadingController.dismiss();
          this.presentToast("¡Contraseña Restablecida Correctamente!");
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

}
