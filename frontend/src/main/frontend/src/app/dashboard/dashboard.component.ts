import { Component, OnInit } from '@angular/core';
import {Rental} from '../models/rental';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  rentals: Rental[];
  imageURI = "https://www.regatta.ro/images/400x400/media/casa-de-vanzare-4-camere-zona-pipera-aviatiei-bucuresti-145-mp-rgt32220-1.jpg";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Rental[]>("/api/rentals").subscribe(data => {
        data = data.map(rental => {
          rental.imageURI = this.imageURI;
          return rental;
        });
        this.rentals = data;
      }
    );
  }
}
