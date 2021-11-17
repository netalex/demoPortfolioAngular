import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-text',
  template: `
    <p class="contenttext">text</p>
  `,
  styles: [
    `
      .contenttext {
        font-size: 3vh;
        color: gray;
        margin: 0;
        padding: 0;
      }
    `
  ]
})
export class ContentTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
