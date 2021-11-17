import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card card_content" >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .card {
        border-radius: 12px;
      }

      .card_content {
        width: auto;
        height: auto;
        min-height: 66vh;
        box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
        background: #fff;
        position: relative;
      }

    `
  ]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
