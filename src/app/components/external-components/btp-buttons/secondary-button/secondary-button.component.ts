import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { buttonClickHelper, buttonSettingsHelper } from '../helpers/common-methods.helper';

@Component({
  selector: 'bz-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent implements OnInit {

  @Input() text = '';
  @Input() disabled = false;
  @Input() size = '';
  @Input() fullWidth = false;

  @Output() onclick = new EventEmitter();
  @Output() onclickEvent = new EventEmitter<MouseEvent>();

  constructor() {
    console.log('constructor => SecondaryButtonComponent');
  }

  ngOnInit() {
    console.log('ngOnInit => SecondaryButtonComponent');
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
