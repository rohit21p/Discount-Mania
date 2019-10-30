import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offer = {
    by: 'Rohit Panjwani',
    title: 'Placeholder Offer',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at facere, dolor dolorem eaque error 
    natus officia, aliquam molestiae voluptate amet aperiam sint aut consequuntur, laboriosam voluptates aliquid ut vero.`,
    worth: 200,
    valid: '20/09/2019',
    price: 2.65
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
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
