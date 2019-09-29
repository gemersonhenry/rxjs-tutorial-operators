import { Component, OnInit } from '@angular/core';
import { JphCommentsImplementService } from 'src/app/services/jsonplaceholder/jph-comments-implement.service';

@Component({
  selector: 'bz-create-observables',
  templateUrl: './create-observables.component.html',
  styleUrls: ['./create-observables.component.scss']
})
export class CreateObservablesComponent implements OnInit {

  constructor(
    private jphCommentsImplement: JphCommentsImplementService,
  ) { }

  ngOnInit() {
    this.jphCommentsImplement.getComments()
      .subscribe((response) => {
        console.log(response);
      });
  }

}
