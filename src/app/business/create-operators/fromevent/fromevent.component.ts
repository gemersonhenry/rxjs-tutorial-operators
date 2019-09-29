import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'bz-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss']
})
export class FromeventComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    const el01 = this.document.querySelector('#element-01');
    const el02 = this.document.querySelector('.element-02');
    console.log(el01, el02);

    // https://www.w3schools.com/jsref/obj_mouseevent.asp
    const click$ = fromEvent(el01, 'click');
    click$.subscribe((el) => {
      console.log(el);
    });
  }

}
