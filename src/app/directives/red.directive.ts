import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[red]',
  standalone: true,
})
export class RedDirective {
  color = 'red';
  textTransform = 'lowercase';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.color;
  }

  @HostBinding('style.textTransform')
  get textTransformGetter() {
    return this.textTransform;
  }

  @HostListener('mouseleave')
  leave() {
    this.color = 'red';
    this.textTransform = 'lowercase';
  }

  @HostListener('mouseenter')
  click() {
    this.textTransform = 'uppercase';
    this.color = 'green';
  }
}
