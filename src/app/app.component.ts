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

  public quantity: number = 0;
  public cards$: Observable<Card[]>;

  public constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu.svg'));
  }

  public ngOnInit(): void {
    this.cards$ = cards$;
  }

  public countQuantity(): number {
    return this.quantity++;
  }

}
