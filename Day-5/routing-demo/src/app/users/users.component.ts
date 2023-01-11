import { Component, OnInit } from '@angular/core';
import { Posts } from './posts';
import { PostsServiceService } from '../posts-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  posts: Posts[]=[]; 
  constructor(private service: PostsServiceService) { }

  ngOnInit(): void {
  }
  public getPost()
  {
    this.service.getPosts().subscribe((response)=>{
      this.posts=response;
    });
  }

}
