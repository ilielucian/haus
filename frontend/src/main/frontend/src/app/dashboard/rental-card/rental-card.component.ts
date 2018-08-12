import {Component, Input, OnInit} from '@angular/core';
import {Rental} from '../../models/rental';

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent implements OnInit {
  @Input() rental: Rental;

  constructor() { }

  ngOnInit() {
  }

}
