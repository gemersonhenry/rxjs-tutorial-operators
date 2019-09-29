import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bz-header-and-footer-card',
  templateUrl: './header-and-footer-card.component.html',
  styleUrls: ['./header-and-footer-card.component.scss']
})
export class HeaderAndFooterCardComponent implements OnInit {

  @Input() headerText = 'CARD HEADER';
  @Input() titleText = 'CARD TITLE';
  @Input() commentText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magni sunt,
    explicabo reiciendis quia maxime doloremque sit est quaerat hic.
    Eius voluptas fuga ab illo earum hic enim voluptatem libero.`;

  constructor() { }

  ngOnInit() {
  }

  public primaryButtonEvent() {

  }

  public secondaryButtonEvent() {

  }

}
