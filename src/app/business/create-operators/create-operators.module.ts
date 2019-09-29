import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOperatorsRoutingModule } from './create-operators-routing.module';
import { CreateObservablesComponent } from './create-observables/create-observables.component';
import { BtpCardsModule } from 'src/app/components/external-components/btp-cards/btp-cards.module';

const MODULES = [
  BtpCardsModule,
];

@NgModule({
  declarations: [CreateObservablesComponent],
  imports: [
    CommonModule,
    CreateOperatorsRoutingModule,
    ...MODULES,
  ]
})
export class CreateOperatorsModule { }
