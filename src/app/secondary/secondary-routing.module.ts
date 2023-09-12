import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondaryPage } from './secondary.page';

const routes: Routes = [
  {
    path: '',
    component: SecondaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondaryPageRoutingModule {}
