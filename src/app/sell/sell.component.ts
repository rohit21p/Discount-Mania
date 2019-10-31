import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  form = {
    title: '',
    category: '',
    predesc: '',
    comdesc: '',
    price: '',
    validity: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  create() {
    this.http.post("http://localhost:3000/create", JSON.stringify(this.form)).subscribe((data) => {
      console.log(data);
    });
  }

}
