import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';
import { ComponenteTresComponent } from 'src/app/components/componente-tres/componente-tres.component';
import { ComponenteUnoComponent } from 'src/app/components/componente-uno/componente-uno.component';
import { IngresadoGuard } from 'src/app/ingresado.guard';

import { BienvenidoPage } from './bienvenido.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoPage,
    children:[
      {
        path: "asignatura",
        component: ComponenteUnoComponent
      },
      {
        path: "mensajes",
        component: ComponenteDosComponent
      },
      {
        path: "perfil",
        component: ComponenteTresComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidoPageRoutingModule {}
