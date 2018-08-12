import {Component, Input, OnInit} from '@angular/core';
import {Rental} from '../../models/rental';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  @Input() rentals: Rental[];

  constructor() { }

  ngOnInit() {
  }

}
