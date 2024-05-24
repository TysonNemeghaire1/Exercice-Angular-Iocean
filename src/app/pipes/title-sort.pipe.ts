import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '../../interfaces/title';

@Pipe({
  name: 'titleSort',
})
export class TitleSortPipe implements PipeTransform {
  transform(value: Title[], sortAsc: boolean): Title[] {
    if (!value || !sortAsc) {
      return value;
    }

    return value.sort((a, b) => {
      const titleA = a.titre.toUpperCase();
      const titleB = b.titre.toUpperCase();

      if (titleA < titleB) {
        return sortAsc ? -1 : 1;
      } else if (titleA > titleB) {
        return !sortAsc ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
