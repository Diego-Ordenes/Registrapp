import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { BdLocalService } from 'src/app/services/bd-local.service';
import { send } from 'emailjs-com';
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss'],
})
export class ComponenteUnoComponent  {

  testQR:any;
  QRTest:any;
  
  constructor(private activerouter: ActivatedRoute,private router:Router,private camera: Camera,public loadingController: LoadingController
    ,private barcode: BarcodeScanner,private bdScaner: BdLocalService) { }
  
  camoption: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE
  }

  levantarCam(){
    this.camera.getPicture(this.camoption).then((imageData) => {
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });
  }

  Cerrar_sesion(){
    localStorage.setItem('ingresado','false')
    this.presentLoadingWithOptions();
    this.loadingController.dismiss();
    this.router.navigate(['/iniciosesion']);
  }
  
  Scan(){
    this.barcode.scan().then((barcodeData)=>{
  
      var CodigoQR=barcodeData.text;
      var CodigoJson=JSON.parse(CodigoQR);
      console.log(CodigoJson.seccion);
       this.testQR=barcodeData.text;
       emailjs.send("gmail","template_apv26vj",{
        seccion: CodigoJson.seccion,
        asignatura: CodigoJson.asignatura,
        docente: CodigoJson.docente,
        emailDestino: CodigoJson.correo,
        },'user_lPyMT5ur7gmvNaBzgiuXc').then((result: EmailJSResponseStatus) =>{
          console.log("emailjs resultado qr: " + result.text);
          }, (error) => {
          console.log("emailjs resultado error: " + error.text);
        });
       //this.QRTest=JSON.parse(this.testQR); //Combertirlo en Json
      alert(barcodeData.text);
      this.bdScaner.GuardarScaneo(CodigoJson.idAsignatura,CodigoJson.seccion,CodigoJson.asignatura,CodigoJson.docente,CodigoJson.correo,CodigoJson.fecha);
    },(err)=>{
      alert(JSON.stringify(err));
     })
  }
 /*
  EnviarCorreo(){
    send("gmail","template_apv26vj",{
      seccion: "003D",
      asignatura: "Programación Móvil",
      docente: "Nancy",
      correo: "hola@gmail.com",
      emailDestino: "daof.diego@gmail.com",
      });
  }*/


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

