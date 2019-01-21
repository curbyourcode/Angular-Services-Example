import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'Ford', 'Chevrolet', 'Buick'
  ];

  myData() {
    return 'Thius is my data, YES!';
  }
}
