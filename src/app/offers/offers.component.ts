import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers = [
  ];

  msg: string;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.http.post("http://ec2-13-233-98-246.ap-south-1.compute.amazonaws.com:4000/posts", JSON.stringify({
      category: this.route.snapshot.params['category']
    })).subscribe((data: any) => {
      console.log(data);
      this.offers = data.result;
    }, (error) => {
      this.msg = 'Can\'t connect to server.';
      $('#error').modal('show');
    });
  }

}
