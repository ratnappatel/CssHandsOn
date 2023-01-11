import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
    mobiles()
    {
      this.router.navigate(['mobiles'],{relativeTo:this.route});
    }
    laptops()
    {
      this.router.navigate(['laptops'],{relativeTo:this.route});
    }
    televisions()
    {
      this.router.navigate(['televisions'],{relativeTo:this.route});
    }
}
