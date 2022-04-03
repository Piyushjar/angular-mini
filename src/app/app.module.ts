import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { CkeditorPageComponent } from './ckeditor-page/ckeditor-page.component';
import { CardsComponent } from './cards/cards.component';
import { CardSectionComponent } from './card-section/card-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CkeditorPageComponent,
    CardsComponent,
    CardSectionComponent
  ],
  imports: [ BrowserModule,FormsModule, CKEditorModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
