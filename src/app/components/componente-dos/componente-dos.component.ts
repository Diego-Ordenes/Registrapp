import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { APIAlumnoService } from 'src/app/services/apialumno.service';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss'],
})
export class ComponenteDosComponent  {

  user:any;
  constructor(private api: APIAlumnoService,private router:Router,) {

   }
  
  crud(){
    this.router.navigate(['/personas']);//, navigationExtras);
  }

  


}
