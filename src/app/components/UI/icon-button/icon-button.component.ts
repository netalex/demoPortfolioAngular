import { Component, OnInit } from '@angular/core';

import {iconNames} from '../../../constants/iconNames'

@Component({
  selector: 'app-icon-button',
  template: `
    <div class="button selected">
      <div class="arrow"></div>
<!--      <i class="i far fa-user" ></i>-->
      <i [className]="icons[0]+' i' "></i>
    </div>
  `,
  styles: [
    `
      .button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .button .i {
        color: gray;
        padding-top: 1vh;
        padding-bottom: 0;
        padding-left: 1vw;
        padding-right: 1vw;
        font-size: 6vw;
      }

      .arrow {
        visibility: hidden;
        width: 0;
        height: 0;
        border-left: 1vw solid transparent;
        border-right: 1vw solid transparent;
        border-bottom: 1vw solid green;
      }


      .selected .arrow {
        visibility: visible;
      }

      .selected .i {
        border-top: 0.4vh solid green;
        color: green;
      }
    `
  ]
})
export class IconButtonComponent implements OnInit {

  icons: typeof iconNames;


  constructor() {
    this.icons = iconNames;
  }

  ngOnInit(): void {
  }

}
