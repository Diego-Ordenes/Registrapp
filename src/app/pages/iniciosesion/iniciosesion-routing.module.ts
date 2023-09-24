import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciosesionPage } from './iniciosesion.page';

const routes: Routes = [
  {
    path: '',
    component: IniciosesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciosesionPageRoutingModule {}
