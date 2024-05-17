import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { VNavComponent } from './shared-component/v-nav/v-nav.component';


@NgModule({
  declarations: [
    VNavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [VNavComponent]
})
export class SharedModule { }
