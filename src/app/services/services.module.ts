import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { JphCommentsClientService } from './jsonplaceholder/jph-comments-client.service';
import { JphCommentsImplementService } from './jsonplaceholder/jph-comments-implement.service';

export const SERVICES = [
  JphCommentsClientService,
  JphCommentsImplementService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class ServicesModule { }
