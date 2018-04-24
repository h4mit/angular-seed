import {Component, AfterViewInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'home-page',
  templateUrl: 'home-page.html',
  styleUrls: ['home-page.scss']
})
export class HomePage implements AfterViewInit {

  typesOfMovies = ['ابد و یک روز', 'نفس', 'ماجرای نیمروز', 'دلبری', 'ربان قرمز'];
  tiles = [
    {text: 'یک', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'دو', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'سه', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'چهار', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(public snackBar: MatSnackBar) {
  }

  ngAfterViewInit() {
    const that = this;
    setTimeout( function() {
      that.snackBar.open('خوش آمدید', 'بستن', {
        duration: 2000,
      });
    }, 500);
  }
}
