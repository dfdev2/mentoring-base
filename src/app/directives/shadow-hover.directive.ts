import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[shadowHover]',
  standalone: true,
})
export class ShadowHover {
  boxShadow = '';
  transition = '';

  @HostBinding('style.boxShadow')
  get boxShadowGetter() {
    return this.boxShadow;
  }
  @HostBinding('style.transition')
  get transitionGetter() {
    return this.transition;
  }

  @HostListener('mouseenter')
  enter() {
    this.boxShadow = '0px 20px 20px 0px #000';
    this.transition = 'box-shadow 0.3s ease 0s';
  }

  @HostListener('mouseleave')
  leave() {
    this.transition = 'box-shadow 0.3s ease 0s';
    this.boxShadow = '';
  }
}
