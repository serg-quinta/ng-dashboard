import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  @Input()
  public card: Card;

  @Input()
  public set first(isFirst: boolean) {
    if (!isFirst) {
      return;
    }
    this.chooseFirst.emit(this.card);
  }

  @Output()
  public chooseFirst: EventEmitter<Card> = new EventEmitter();
}
