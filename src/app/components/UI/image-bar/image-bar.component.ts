import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-bar',
  template: `
    <div class="image_bar centered_section">
      <div class="profile_big_image">
        <img
          src={imgpath}
          alt=IMAGE_ALT_TEXT
        />
      </div>
    </div>
  `,
  styles: [
    `
      .image_bar {
        width: 100%;
        height: 15vh;
        background-color: #fff;
        border-bottom: 1px solid black;
        border-radius: 12px 12px 0 0;
      }

      .profile_big_image {
        width: 14vh;
        margin: auto;
        border: 2px solid black;
        background-color: cyan;
        position: relative;
        border-radius: 50%;
        transform: translateY(4vh);
        padding-bottom: 14vh;
        overflow: hidden;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        position: absolute;
      }
    `
  ]
})
export class ImageBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
