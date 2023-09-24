import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HttpClientModule } from '@angular/common/http'
import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

import { isPlatform } from '@ionic/angular';
import { animate } from '@angular/animations';
import{ init } from 'emailjs-com';
init("user_lPyMT5ur7gmvNaBzgiuXc");




const getConfig = () => {
  if (isPlatform('android') && isPlatform('ios') && isPlatform('ipad') 
  && isPlatform('hybrid') && isPlatform('tablet') && isPlatform('mobileweb')) {
    return {
      rippleEffect: false,
      hardwareBackButton: true,
      animated:  true,
      statusTap: true,
      swipeBackEnabled: true
    }
  }
  else {
    return{
      animated:  true,
      hardwareBackButton: false,
      menuIcon: 'ellipsis-vertical'
    }
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(getConfig()),
    AppRoutingModule, IonicStorageModule.forRoot(), BrowserAnimationsModule, HttpClientModule],
  providers: [
    Camera,
    BarcodeScanner,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

],

  bootstrap: [AppComponent],
})
export class AppModule {}
