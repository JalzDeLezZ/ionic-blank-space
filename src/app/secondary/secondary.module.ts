import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondaryPageRoutingModule } from './secondary-routing.module';

import { SecondaryPage } from './secondary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondaryPageRoutingModule
  ],
  declarations: [SecondaryPage]
})
export class SecondaryPageModule {}
