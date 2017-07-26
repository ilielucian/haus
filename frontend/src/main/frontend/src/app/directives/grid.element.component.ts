import { Component, Input } from '@angular/core';
import { Rental } from '../models/rental';

@Component({
  selector: 'grid-element',
  templateUrl: './grid.element.component.html',
  styleUrls: ['./grid.element.component.css']
})
export class GridElement {
  @Input() rental: Rental;
}
