import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output()
  public searchResult: EventEmitter<string> = new EventEmitter();

  public search(value: string): void {
    this.searchResult.emit(value);
  }

}
