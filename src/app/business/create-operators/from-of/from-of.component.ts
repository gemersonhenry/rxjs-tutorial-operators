import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { PRODUCTS, IProduct } from '../dummy-data/arrays';
import { delay, zip } from 'rxjs/operators';

@Component({
  selector: 'bz-from-of',
  templateUrl: './from-of.component.html',
  styleUrls: ['./from-of.component.scss']
})
export class FromOfComponent implements OnInit {

  private productsFrom$ = from(PRODUCTS);
  private productsOf$ = of(PRODUCTS);

  public titleFrom = '';
  public titleOf = '';

  constructor() { }

  ngOnInit() {
  }

}
