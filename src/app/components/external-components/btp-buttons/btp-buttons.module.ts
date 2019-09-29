import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';

const COMPONENTS = [
  PrimaryButtonComponent,
  SecondaryButtonComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class BtpButtonsModule { }
