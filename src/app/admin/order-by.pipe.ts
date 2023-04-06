import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string, sortOrder: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }

    const direction = sortOrder === 'asc' ? 1 : -1;

    array.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1 * direction;
      } else if (a[field] > b[field]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });

    return array;
  }
}
