import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-content',
  template: `
    <div class="showcontent_section centered_section">
      <app-content-text text={text}></app-content-text>
      <app-content-value value={value}></app-content-value>
    </div>
  `,
  styles: [
    `
      .showcontent_section {
        width: 100%;
        height: 33vh;
        background-color: #fff;
        flex-direction: column;
      }

    `
  ]
})
export class ShowContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
