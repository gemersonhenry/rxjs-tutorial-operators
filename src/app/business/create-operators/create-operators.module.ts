import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOperatorsRoutingModule } from './create-operators-routing.module';
import { CreateObservablesComponent } from './create-observables/create-observables.component';


@NgModule({
  declarations: [CreateObservablesComponent],
  imports: [
    CommonModule,
    CreateOperatorsRoutingModule
  ]
})
export class CreateOperatorsModule { }
