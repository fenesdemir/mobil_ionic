import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedsPage } from './meds.page';
import { MedsDetailComponent } from "./meds-detail/meds-detail.component";

const routes: Routes = [
  {
    path: '',
    component: MedsPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedsPageRoutingModule {}
