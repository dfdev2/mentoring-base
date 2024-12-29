import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todayDate',
  standalone: true,
})
export class TodayDatePipe implements PipeTransform {
  transform(format: string = 'mediumDate'): string {
    const today = new Date();
    return new Intl.DateTimeFormat('en-US', this.getOptions(format)).format(
      today
    );
  }

  private getOptions(format: string): Intl.DateTimeFormatOptions {
    switch (format) {
      case 'shortDate':
        return { year: 'numeric', month: 'numeric', day: 'numeric' };
      case 'mediumDate':
        return { year: 'numeric', month: 'short', day: 'numeric' };
      case 'fullDate':
        return {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
      default:
        return {};
    }
  }
}
