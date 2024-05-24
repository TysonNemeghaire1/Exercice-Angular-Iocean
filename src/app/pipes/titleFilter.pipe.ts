import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '../../interfaces/title';

@Pipe({
  name: 'titleFilter',
})
export class TitleFilterPipe implements PipeTransform {
  transform(items: Title[], filter: string): Title[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item.titre.toUpperCase().includes(filter.toUpperCase()));
  }
}
