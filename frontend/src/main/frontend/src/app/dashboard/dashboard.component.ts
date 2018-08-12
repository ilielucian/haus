import { Component, OnInit } from '@angular/core';
import {Rental} from '../models/rental';
import {RentalsService} from '../services/rentals.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  rentals: Rental[];

  constructor(private rentalsService: RentalsService) {}

  ngOnInit(): void {
    this.rentalsService.getRentals().subscribe(rentals => this.rentals = rentals);
  }
}
