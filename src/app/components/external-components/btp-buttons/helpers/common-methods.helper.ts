import { BUTTON_SIZE } from '../settings/buttons-settings.constant';
import { EventEmitter } from '@angular/core';

export const buttonSettingsHelper = (
  size: string,
  fullWidth: boolean,
) => {
  const { LG, SM } = BUTTON_SIZE;
  return {
    'btn-lg': size === LG,
    'btn-sm': size === SM,
    'btn-block': fullWidth,
  };
};

export const buttonClickHelper = (
  disabled: boolean,
  onclick: EventEmitter<any>,
  onclickEvent: EventEmitter<MouseEvent>,
  $event: MouseEvent
) => {
  if (!disabled) {
    if (onclick.observers.length > 0) {
      onclick.emit();
    }
    if (onclickEvent.observers.length > 0) {
      onclickEvent.emit($event);
    }
  }
};
