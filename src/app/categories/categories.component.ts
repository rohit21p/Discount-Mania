import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: string[] = [
    "Electronics",
    "Fashion",
    "Grocery",
    "Sports",
    "Mobile Recharge",
    "DTH Recharge"
  ]

  constructor() { }

  ngOnInit() {
  }

}
