import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <app-wrapper>
    <app-card>
      <app-image-bar></app-image-bar>
      <app-show-content></app-show-content>
      <app-button-bar></app-button-bar>
    </app-card>
  </app-wrapper>

  `,
  styles: [`
  body {
    background-color: cyan;
  }
  `]
})
export class AppComponent {
  title = 'demoPortfolioAngular';
}
