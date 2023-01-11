import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArticleComponent} from './components/ArticleComponent/Article'
import { AppComponent } from './app.component';
import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
