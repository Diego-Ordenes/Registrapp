import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IRegistrar, Scaneo } from '../interfaces/iregistrar';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  registrar: IRegistrar[]=[];
  validar: IRegistrar[]=[];
  scaneo: Scaneo[]=[];
  
  private _storage: Storage | null = null;
  constructor(private storage: Storage,public toastController: ToastController,private router:Router,
    public loadingController: LoadingController,
    public navCtrl: NavController) {
    this.init();
    this.cargarRegistros()
   }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //metodo para Guardar los Registrar
  async cargarRegistros(){
    const miRegistro=await this.storage.get('registro');
    if(miRegistro){
      this.registrar=miRegistro;
    }
  }
guardarRegistro(nombre: string,correo: string,contrasena: string){
  //escribir una instruccion lambda para verificar que el correo no exista en mi registro (select de la BD, para registros que no esten repetidos)
  const existe=this.registrar.find(c=>c.strCorreo===correo);
  if(!existe) {
    this.registrar.unshift({strNombre:nombre,strCorreo:correo,strPassword:contrasena});
    this._storage.set('registro',this.registrar);
    this.presentToast("¡Registro Agregado Exitosamente!")
  } else {
    this.presentToast("¡Error: Registro Existente o Ingrese nuevamente!")
  }
  //this._storage.set('ingresado','true');
  //this.navCtrl.navigateRoot('bienvenido');
}
//Validacion por local-Storage
ValidarRegistro(nombre: string, contrasena: string){
  const existe=this.registrar.find(c=>c.strNombre===nombre && c.strPassword===contrasena);
   if (existe) {
     console.log('ingresado')
     this.presentLoadingWithOptions();
     this.loadingController.dismiss();
     //this.router.navigate(['/bienvenido']);
     this.router.navigate(['/bienvenido']);
     localStorage.setItem('ingresado','true');
   } else {
     this.presentToast("Error: Inicie Sesion Correctamente...")
   }
}
//animacion cargar
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

  
  //Guardar QR
  GuardarScaneo(idAsignatura: string,seccion: string,asignatura: string,docente: string,correo: string,fecha: any){
   this.scaneo.unshift({
    idAsignatura: idAsignatura,
    seccion: seccion,
    asignatura: asignatura,
    docente: docente,
    correo: correo,
    fecha: fecha
   })
   this._storage.set('Scaneo Resultado',this.scaneo);

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
