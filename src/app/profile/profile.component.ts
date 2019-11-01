import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  b_offers = [
    {
      _id: 1,
      title: 'Rohit',
      predesc: 'dacadc davfav dacqav qecdq ec we cwvswf vswvv'
    },
    {
      _id: 1,
      title: 'Rohit',
      predesc: 'dacadc davfav dacqav qecdq ec we cwvswf vswvv'
    },
    {
      _id: 1,
      title: 'Rohit',
      predesc: 'dacadc davfav dacqav qecdq ec we cwvswf vswvv'
    }
  ];

  p_offers = [
    {
      _id: 1,
      title: 'Rohit',
      predesc: 'dacadc davfav dacqav qecdq ec we cwvswf vswvv'
    },
    {
      _id: 1,
      title: 'Rohit',
      predesc: 'dacadc davfav dacqav qecdq ec we cwvswf vswvv'
    },
    {
      _id: 1,
      title: 'Rohit',
      predesc: 'dacadc davfav dacqav qecdq ec we cwvswf vswvv'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
