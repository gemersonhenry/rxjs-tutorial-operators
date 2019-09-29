import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOperatorsRoutingModule } from './create-operators-routing.module';
import { CreateObservablesComponent } from './create-observables/create-observables.component';
import { BtpCardsModule } from 'src/app/components/external-components/btp-cards/btp-cards.module';
import { ServicesModule } from 'src/app/services/services.module';
import { CreateOperatorsComponent } from './create-operators.component';
import { IntervalTimeComponent } from './interval-time/interval-time.component';
import { FromOfComponent } from './from-of/from-of.component';
import { FromeventComponent } from './fromevent/fromevent.component';

const MODULES = [
  BtpCardsModule,
  ServicesModule,
];

@NgModule({
  declarations: [
    CreateOperatorsComponent,
    CreateObservablesComponent,
    IntervalTimeComponent,
    FromOfComponent,
    FromeventComponent,
  ],
  imports: [
    CommonModule,
    CreateOperatorsRoutingModule,
    ...MODULES,
  ]
})
export class CreateOperatorsModule { }
