import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciosesionPageRoutingModule } from './iniciosesion-routing.module';

import { IniciosesionPage } from './iniciosesion.page';
import { InputModule } from '../../components/input/input.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    IniciosesionPageRoutingModule,
  ],
  declarations: [IniciosesionPage]
})
export class IniciosesionPageModule {}
