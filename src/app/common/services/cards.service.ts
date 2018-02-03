import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const data: Card[] = [
  {
    'avatar': '/assets/img/shiba1.jpg',
    'title': 'Card Title',
    'subtitle': 'Card Subtitle',
    'img': '/assets/img/cards.jpg',
    'content': 'Card content'
  },
  {
    'avatar': '/assets/img/shiba1.jpg',
    'title': 'Card2 Title',
    'img': '/assets/img/cards.jpg',
    'content': 'Card2 content'
  },
  {
    'avatar': '/assets/img/shiba1.jpg',
    'title': 'Card3 Title',
    'subtitle': 'Card3 Subtitle',
    'img': '/assets/img/cards.jpg',
    'content': 'Card3 content'
  }
];

@Injectable()
export class CardsService {

  public get cards$(): Observable<Card[]> {
    return Observable.of(data)
            .delay(2000);
  }
}
