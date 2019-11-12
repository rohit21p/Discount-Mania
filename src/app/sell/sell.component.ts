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
    cap: '',
    predesc: '',
    comdesc: '',
    price: '',
    worth: '',
    validity: '',
    prereq: '',
    by: ''
  };

  msg: string;
  submsg: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  create() {
    this.http.get('http://localhost:3000/isLoggedIn', {
      withCredentials: true
    }).subscribe((is: any) => {
      if (is.LoggedIn) {
        this.http.post("http://localhost:3000/create", JSON.stringify(this.form), {
          withCredentials: true
        }).subscribe((data: any) => {
          console.log(data);
          if (data.success === true) {
            this.msg = 'A post is succesfuly created.';
            this.submsg = 'Your balance will increase if anyone buys this offer';
          } else if (data.success === 'incomplete form') {
            this.msg = 'Incomplete form.';
            this.submsg = 'Fill each field of the form.';
          } else {
            this.msg = 'Error Occured.';
          }
          $('#create-status').modal('show');
        }, (error) => {
          this.msg = 'Can\'t connect to server.';
          this.submsg = 'Contact us at dis@mania.com if needed';
          $('#create-status').modal('show');
        });
        } else {
          this.msg = 'Not Logged In';
          this.submsg = 'Log-in first';
          $('#create-status').modal('show');
        }
    }, (error) => {
      this.msg = 'Can\'t connect to server.';
      this.submsg = 'Contact us at dis@mania.com if needed';
      $('#create-status').modal('show');
    });
  }

}
