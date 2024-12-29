import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
} from '@angular/core';

@Directive({
  selector: '[red]',
  standalone: true,
})
export class RedDirective {
  color = 'red';
  textTransform = 'lowercase';
  // private readonly elementRef = inject(ElementRef);
  // биндит свойства
  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.color;
  }

  @HostBinding('style.textTransform')
  get textTransformGetter() {
    return this.textTransform;
  }
  // поведение при заведении мыши в элемент
  @HostListener('mouseleave')
  leave() {
    this.color = 'red';
    this.textTransform = 'lowercase';
    console.log('mouseenter');
  }
  // поведение при выведении мыши из элемент
  @HostListener('mouseenter')
  click() {
    this.textTransform = 'uppercase';
    this.color = 'green';
    console.log('mouseleave');
  }
  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
