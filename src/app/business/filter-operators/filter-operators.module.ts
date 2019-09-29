import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterOperatorsRoutingModule } from './filter-operators-routing.module';
import { TakeComponent } from './take/take.component';


@NgModule({
  declarations: [TakeComponent],
  imports: [
    CommonModule,
    FilterOperatorsRoutingModule
  ]
})
export class FilterOperatorsModule { }
