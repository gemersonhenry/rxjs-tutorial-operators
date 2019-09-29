import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOperatorsRoutingModule } from './create-operators-routing.module';
import { CreateObservablesComponent } from './create-observables/create-observables.component';
import { BtpCardsModule } from 'src/app/components/external-components/btp-cards/btp-cards.module';
import { ServicesModule } from 'src/app/services/services.module';
import { CreateOperatorsComponent } from './create-operators.component';

const MODULES = [
  BtpCardsModule,
  ServicesModule,
];

@NgModule({
  declarations: [
    CreateOperatorsComponent,
    CreateObservablesComponent,
  ],
  imports: [
    CommonModule,
    CreateOperatorsRoutingModule,
    ...MODULES,
  ]
})
export class CreateOperatorsModule { }
