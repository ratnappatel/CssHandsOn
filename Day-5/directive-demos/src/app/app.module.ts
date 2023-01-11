import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from './app-highlight-directive';
import { AppComponent } from './app.component';
import { StyleComponentComponent } from './style-component/style-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponentComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
