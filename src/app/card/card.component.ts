import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public card: Card;

  @Input()
  public position: number;

  @Input()
  public isOdd: boolean;

  public constructor() { }

  public ngOnInit(): void {
  }

}
