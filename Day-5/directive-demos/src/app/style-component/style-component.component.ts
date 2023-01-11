import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-component',
  templateUrl: './style-component.component.html',
  styleUrls: ['./style-component.component.css']
})
export class StyleComponentComponent implements OnInit {

  constructor() { }

  getColor(country: any):string{
    switch(country)
    {
      case 'UK':
        return 'red';
      case 'USA':
          return 'green';
      case 'India':
          return 'blue';
        default: 
          return 'cyan';
    }
  }
  ngOnInit(): void {
  }
  employees: any [] = [
    {
      name:"a1",
      country:"UK"
    },
    {
      name:"b1",
      country:"USA"
    },
    {
      name:"c1",
      country:"India"
    },
    {
      name:"d1",
      country:"USA"
    },
    {
      name:"d1",
      country:"Afghanistan"
    }
  ];
}

