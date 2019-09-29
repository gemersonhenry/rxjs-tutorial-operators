import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../dummy-data/arrays';

@Component({
  selector: 'bz-create-observables',
  templateUrl: './create-observables.component.html',
  styleUrls: ['./create-observables.component.scss']
})
export class CreateObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getProduct$() {

  }

}
