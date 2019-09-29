import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'bz-interval-time',
  templateUrl: './interval-time.component.html',
  styleUrls: ['./interval-time.component.scss']
})
export class IntervalTimeComponent implements OnInit {

  public interval$ = interval(1000);
  public timer$ = timer(1000, 5000);

  constructor() { }

  ngOnInit() {
  }

}
