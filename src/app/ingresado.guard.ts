import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  constructor(public navCtrl: NavController,private router:Router,private _storage: Storage){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (this._storage.getItem('ingresado')) {
      return true;
    } else {
       this.navCtrl.navigateRoot('iniciosesion');
       return false;
     }
     
    } 

  }
  

