import { Component, OnInit } from '@angular/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public value: string = 'Clear me';

}
