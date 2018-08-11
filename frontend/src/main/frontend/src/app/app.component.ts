import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

import { Rental } from './models/rental';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Haus';
  rentals: Rental[];
  imageURI = "https://www.regatta.ro/images/400x400/media/casa-de-vanzare-4-camere-zona-pipera-aviatiei-bucuresti-145-mp-rgt32220-1.jpg";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Rental[]>("/api/rentals").subscribe(data =>
      this.rentals = data
    );
  }
}
