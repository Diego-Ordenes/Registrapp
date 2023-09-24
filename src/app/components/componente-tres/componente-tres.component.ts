import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-componente-tres',
  templateUrl: './componente-tres.component.html',
  styleUrls: ['./componente-tres.component.scss'],
})
export class ComponenteTresComponent implements OnInit {
  usuario:any; //variable any(permite cualquier valor)
  constructor(private activerouter: ActivatedRoute,private router:Router,public loadingController: LoadingController) { 

  }
  ngOnInit() {}

  api(){
    this.router.navigate(['/personas']);
  }
  Cerrar_sesion(){
    this.presentLoadingWithOptions();
    this.loadingController.dismiss();
    this.router.navigate(['/iniciosesion']);
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
}
