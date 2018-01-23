import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(cards: Card[], searchTerm: string): Card[] {
    if (!searchTerm) {
      return cards;
    }
    return cards
      .filter((card: Card) =>
        `${card.title}`.toLowerCase()
          .includes(searchTerm.toLowerCase()));
  }

}
