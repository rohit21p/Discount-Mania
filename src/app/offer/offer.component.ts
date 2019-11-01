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
  submsg: any;

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.post('http://localhost:3000/post', JSON.stringify({
      _id: this.route.snapshot.params['id']
    })).subscribe((data: any) => {
      this.offer = data.result[0];
      if (!data.success) {
        this.msg = 'Some Error Occurred.';
        this.submsg = `Contact us on dis@mania.com if needed`;
        $('#error-loading').modal('show');
      }
    }, (error) => {
      this.msg = 'Can\'t connect to server.';
      this.submsg = `Contact us on dis@mania.com if needed`;
      $('#error-loading').modal('show');
    });
  }

  buy() {
    this.http.get('http://localhost:3000/isLoggedIn', {
      withCredentials: true
    }).subscribe((is: any) => {
      if (is.LoggedIn) {
        this.http.post('http://localhost:3000/setup', JSON.stringify({
          amount: this.offer.price,
          _id : this.offer._id
        }), {
          withCredentials: true
        }).subscribe(() => {
          window.open('http://localhost:3000/paytm', '_blank');
          this.http.post('http://localhost:3000/payment-status/' + this.offer._id, JSON.stringify({
          }), {
            withCredentials: true
          }).subscribe((data: any) => {
            console.log(data);
            if (data.payment) {
              this.msg = 'Payment Successful.';
              this.submsg = ' Go to your profile to view offer.';
              $('#error-loading').modal('show');
            } else {
              this.msg = 'Payment failed.';
              this.submsg = `Your payment has failed due to a technical error. Please try again or
                              use a different method to complete the payment.`;
              $('#error-loading').modal('show');
            }
          }, (error) => {
            this.msg = 'Can\'t connect to server.';
            this.submsg = `Contact us on dis@mania.com if needed`;
            $('#error-loading').modal('show');
          });
        }, (error) => {
          this.msg = 'Can\'t connect to server.';
          this.submsg = `Contact us on dis@mania.com if needed`;
          $('#error-loading').modal('show');
        });
      } else {
        this.msg = 'Not Logged In';
        this.submsg = `Log-in first`;
        $('#error-loading').modal('show');
      }
    }, (error) => {
      this.msg = 'Can\'t connect to server.';
      this.submsg = `Contact us on dis@mania.com if needed`;
      $('#error-loading').modal('show');
    });
  }

}
