import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { APIAlumnoService } from './services/apialumno.service';

import { isPlatform, IonicModule} from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor( private apiAlumno: APIAlumnoService,) {}

 
  ngOnInit(): void{
   
  }






}
