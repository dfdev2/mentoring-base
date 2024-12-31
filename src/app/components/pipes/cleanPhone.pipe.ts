import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CleanPhone',
  standalone: true,
})
export class CleanPhone implements PipeTransform {
  transform(
    value: string | number | null | undefined,
    symbolsToRemove: string = ' ()-'
  ): string {
    if (value == null) return '';
    const valueString = value.toString();
    const regex = new RegExp(`[${symbolsToRemove}]`, 'g');
    return valueString.replace(regex, '');
  }
}
