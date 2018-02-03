import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const data: Card[] = [
  {
    'id': 1,
    'title': 'Lord, Save Us from Your Followers',
    'subtitle': 'Documentary',
    'avatar': 'https://robohash.org/repudiandaequiconsectetur.jpg?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/cc0000/ffffff',
    'content': 'grow intuitive web services'
  },
  {
    'id': 2,
    'title': '21 Up',
    'subtitle': 'Documentary',
    'avatar': 'https://robohash.org/temporeitaqueaspernatur.png?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/cc0000/ffffff',
    'content': 'repurpose leading-edge platforms'
  },
  {
    'id': 3,
    'title': 'Snowpiercer',
    'subtitle': 'Action|Drama|Sci-Fi',
    'avatar': 'https://robohash.org/doloribusquipossimus.jpg?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/5fa2dd/ffffff',
    'content': 'optimize open-source e-markets'
  },
  {
    'id': 4,
    'title': 'Godzilla vs. Hedorah (Gojira tai Hedorâ) (Godzilla vs. The Smog Monster) ',
    'subtitle': 'Horror|Sci-Fi',
    'avatar': 'https://robohash.org/utetenim.jpg?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/5fa2dd/ffffff',
    'content': 'evolve frictionless e-markets'
  },
  {
    'id': 5,
    'title': 'Picture This',
    'subtitle': 'Comedy|Drama|Romance',
    'avatar': 'https://robohash.org/nemodoloressed.jpg?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/5fa2dd/ffffff',
    'content': 'whiteboard strategic solutions'
  },
  {
    'id': 6,
    'title': 'Ghost Rider: Spirit of Vengeance',
    'subtitle': 'Action|Fantasy|Thriller',
    'avatar': 'https://robohash.org/quaeutiste.png?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/cc0000/ffffff',
    'content': 'enhance visionary content'
  },
  {
    'id': 7,
    'title': 'Man on the Moon',
    'subtitle': 'Comedy|Drama',
    'avatar': 'https://robohash.org/ametquasieius.png?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/ff4444/ffffff',
    'content': 'reintermediate cutting-edge convergence'
  },
  {
    'id': 8,
    'title': 'Beat the Devil',
    'subtitle': 'Adventure|Comedy|Crime|Drama|Romance',
    'avatar': 'https://robohash.org/illumdeleniticupiditate.jpg?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/ff4444/ffffff',
    'content': 'e-enable killer bandwidth'
  },
  {
    'id': 9,
    'title': 'Majesteit',
    'subtitle': 'Drama',
    'avatar': 'https://robohash.org/eostotamdolor.png?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/cc0000/ffffff',
    'content': 'integrate ubiquitous portals'
  },
  {
    'id': 10,
    'title': 'Unfinished Life, An',
    'subtitle': 'Drama',
    'avatar': 'https://robohash.org/laudantiumsuntsimilique.jpg?size=50x50&set=set1',
    'img': 'http://dummyimage.com/600x400/dddddd/000000',
    'content': 'drive one-to-one ROI'
  }
];

@Injectable()
export class CardsService {

  public get cards$(): Observable<Card[]> {
    return Observable.of(data)
            .delay(2000);
  }
}
