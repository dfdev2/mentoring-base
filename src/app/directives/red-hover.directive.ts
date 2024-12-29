import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[redHover]',
  standalone: true,
})
export class RedHover {
  color = '#ea3f3f';
  transition = '';
  ffff = ' #ea3f3f';

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
    this.color = '#782424';
    this.transition = 'background 0.3s ease 0s';
  }

  @HostListener('mouseleave')
  leave() {
    this.transition = 'background 0.3s ease 0s';
    this.color = '#ea3f3f';
  }
}
