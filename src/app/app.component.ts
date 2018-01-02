import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser/';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public quantity: number = 0;

  public constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu.svg'));
  }

  public countQuantity(): number {
    return this.quantity++;
  }

}
