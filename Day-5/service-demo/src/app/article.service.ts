import { Injectable } from '@angular/core';
import { ARTICLES } from './Article-data';
import { Article} from './Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  getArticles()
  {
    return ARTICLES;
    // calling a rest api which reads all record from backend database
    // DAO-SERVICE LAYER which returns data from back-end application
  }
}
