import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser/';
import { MatIconRegistry } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { cards$ } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public cards$: Observable<Card[]>;
  public firstCardTitle: string;

  public constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
    iconRegistry.addSvgIcon(
        'close',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg'));
  }

  public ngOnInit(): void {
    this.cards$ = cards$;
  }

  public chooseFirst(card: Card): void {
    this.firstCardTitle = card.title;
  }

}
