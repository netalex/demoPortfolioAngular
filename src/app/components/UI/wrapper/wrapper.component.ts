import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <div class="wrapper" >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .wrapper {
        /*display: flex;*/
        /*width: 100%;*/
        width: auto;
        /*min-width: 100vw;*/
        height: auto;
        /*min-height: 100vh;*/
        background-color: lightcyan;
        margin: 0;
        padding: 1rem;
        align-content: center;
        justify-content: center;
      }
    `
  ]
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
