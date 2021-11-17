import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/UI/wrapper/wrapper.component';
import { CardComponent } from './components/UI/card/card.component';
import { ImageBarComponent } from './components/UI/image-bar/image-bar.component';
import { ShowContentComponent } from './components/UI/show-content/show-content.component';
import { ContentTextComponent } from './components/content-text/content-text.component';
import { ContentValueComponent } from './components/content-value/content-value.component';
import { ButtonBarComponent } from './components/UI/button-bar/button-bar.component';
import { IconButtonComponent } from './components/UI/icon-button/icon-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    CardComponent,
    ImageBarComponent,
    ShowContentComponent,
    ContentTextComponent,
    ContentValueComponent,
    ButtonBarComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
