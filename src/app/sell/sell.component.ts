import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

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

  msg: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  create() {
    this.http.post("http://localhost:3000/create", JSON.stringify(this.form)).subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        this.msg = 'A post is succesfuly created.';
      } else {
        this.msg = 'Error Occured.';
      }
      $('#create-status').modal('show');
    }, (error) => {
      this.msg = 'Can\'t connect to server.';
      $('#create-status').modal('show');
    });
  }

}
