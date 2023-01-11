import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/Article";
import { ArticleService } from "src/app/article.service";


@Component({
    selector: 'app-article',
    templateUrl: './Article.html',
    // styleUrls: ['./Article.css'],
    providers: [ArticleService]
  })

export class ArticleComponent implements OnInit {
    articles: Article[]=[];
constructor(private articleService: ArticleService){}

    ngOnInit(): void {

        console.log("In ngOnInit");
       this.getArticles();
    }
    getArticles()
    {
        console.log("getArticle of Article Component")
        this.articles=this.articleService.getArticles();
    }
   
}