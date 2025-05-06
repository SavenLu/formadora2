import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimaisPage } from './animais.page';

const routes: Routes = [
  {
    path: '',
    component: AnimaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisPageRoutingModule {}
