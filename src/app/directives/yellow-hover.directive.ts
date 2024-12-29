import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[yellowHover]',
  standalone: true,
})
export class YellowHover {
  color = '#4b565e';
  transition = '';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.color;
  }
  @HostBinding('style.transition')
  get transitionChange() {
    return this.transition;
  }

  @HostListener('mouseenter')
  enter() {
    this.color = '#f0ba4e';
    this.transition = 'background 0.3s ease 0s';
  }

  @HostListener('mouseleave')
  leave() {
    this.transition = 'background 0.3s ease 0s';
    this.color = '#4b565e';
  }
}
