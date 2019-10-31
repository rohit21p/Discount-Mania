import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offer: any;
  msg: any;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.post('http://localhost:3000/post', JSON.stringify({
      _id: this.route.snapshot.params['id']
    })).subscribe((data: any) => {
      this.offer = data.result[0];
      if (!data.success) {
        this.msg = 'Some Error Occurred.';
        $('#error-loading').modal('show');
      }
    }, (error) => {
      this.msg = 'Can\'t connect to server.';
      $('#error-loading').modal('show');
    });
  }

  buy() {
    this.http.post('http://localhost:3000/setup', JSON.stringify({
      amount: this.offer.price
    }), {
      withCredentials: true
    }).subscribe(() => {
      window.open('http://localhost:3000/paytm', '_blank');
    });
  }

}
