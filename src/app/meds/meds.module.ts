import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedsPageRoutingModule } from './meds-routing.module';

import { MedsPage } from './meds.page';
import { MedsDetailComponent } from "./meds-detail/meds-detail.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedsPageRoutingModule,
  ],
  declarations: [MedsPage,MedsDetailComponent]
})
export class MedsPageModule {}
