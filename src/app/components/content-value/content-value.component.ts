import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-value',
  template: `
    <h3 class="contentstyle">value</h3>
  `,
  styles: [
    `
      .contentstyle {
        font-size: 6vw;
        font-family: arial;
        margin: 0;
        padding: 0;
      }
    `
  ]
})
export class ContentValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
