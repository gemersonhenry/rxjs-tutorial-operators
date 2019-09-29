import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAndFooterCardComponent } from './header-and-footer-card/header-and-footer-card.component';
import { BtpButtonsModule } from '../btp-buttons/btp-buttons.module';

const MODULES = [
  BtpButtonsModule,
];

const COMPONENTS = [
  HeaderAndFooterCardComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class BtpCardsModule { }
