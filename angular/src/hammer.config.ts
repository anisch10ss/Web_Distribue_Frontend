import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = {
    'panleft': { direction: 4 }, // 4 is left
    'panright': { direction: 2 } // 2 is right
  };
}
