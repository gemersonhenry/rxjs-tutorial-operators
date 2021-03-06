import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { buttonSettingsHelper, buttonClickHelper } from '../helpers/common-methods.helper';

@Component({
  selector: 'bz-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {

  @Input() text = '';
  @Input() disabled = false;
  @Input() size = '';
  @Input() fullWidth = false;

  @Output() onclick = new EventEmitter();
  @Output() onclickEvent = new EventEmitter<MouseEvent>();

  constructor() {
    console.log('constructor => PrimaryButtonComponent');
  }

  ngOnInit() {
    console.log('ngOnInit => PrimaryButtonComponent');
  }

  public buttonClick($event: MouseEvent) {
    const { disabled, onclick, onclickEvent } = this;
    buttonClickHelper(disabled, onclick, onclickEvent, $event);
  }

  // you can use this method from the parent component
  public enableButton() {
    this.disabled = false;
  }

  // you can use this method from the parent component
  public disableButton() {
    this.disabled = true;
  }

  public get buttonSettings() {
    const { size, fullWidth } = this;
    return buttonSettingsHelper(size, fullWidth);
  }
}
