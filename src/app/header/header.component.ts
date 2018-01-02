import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string = 'NG Dashboard';
  public safeLogo: SafeUrl;
  public description: string = 'NG Dashboard logo';

  @Output()
  public customEvent: EventEmitter<string> = new EventEmitter();

  @Output()
  public sideNavToggle: EventEmitter<string> = new EventEmitter();

  private _logo: string =
  // tslint:disable-next-line
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==';

  public constructor(
    private _sanitizer: DomSanitizer
  ) {
    this.safeLogo = this._sanitizer.bypassSecurityTrustUrl(this._logo);
   }

  public ngOnInit(): void {
  }

  public sideNav(): void {
    this.sideNavToggle.emit();
  }

  public onLogoClick(): void {
    this.customEvent.emit();
  }

}
