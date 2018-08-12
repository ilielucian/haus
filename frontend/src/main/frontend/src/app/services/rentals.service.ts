import { Injectable } from '@angular/core';
import {Rental} from '../models/rental';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RentalsService {

  constructor(
    private http: HttpClient
  ) { }

  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>("/api/rentals");
  }

}
