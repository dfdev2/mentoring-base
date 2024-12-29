import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CleanPhone',
  standalone: true,
})
export class CleanPhone implements PipeTransform {
  transform(phone: any, symbolsToRemove: string = ' ()-'): string {
    if (!phone) return '';
    const regex = new RegExp(`[${symbolsToRemove}]`, 'g');
    return phone.replace(regex, '');
  }
}
