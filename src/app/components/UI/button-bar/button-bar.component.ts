import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-bar',
  template: `
    <div class="button_section">
      <div class="button_bar">
        <div class="buttons">
          <app-icon-button></app-icon-button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .button_section {
        height: 15vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      .button_bar {
        width: 60%;
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
      }

    `
  ]
})
export class ButtonBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
