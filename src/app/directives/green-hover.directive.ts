import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[greenHover]',
  standalone: true,
})
export class GreenHover {
  color = 'green';
  transition = '';

  @HostBinding('style.backgroundColor')
  get backgroundGetter() {
    return this.color;
  }
  @HostBinding('style.transition')
  get transitionGetter() {
    return this.transition;
  }

  @HostListener('mouseenter')
  enter() {
    this.color = '#0e540e';
    this.transition = 'background 0.3s ease 0s';
  }

  @HostListener('mouseleave')
  leave() {
    this.transition = 'background 0.3s ease 0s';
    this.color = 'green';
  }
}
