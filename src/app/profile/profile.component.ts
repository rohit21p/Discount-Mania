import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  msg: string;
  profile: any;
  submsg: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/isLoggedIn', {
      withCredentials: true
    }).subscribe((is: any) => {
      if (is.LoggedIn) {
        this.http.post("http://localhost:3000/profile", JSON.stringify({
        }), {
          withCredentials: true
        }).subscribe((data: any) => {
          console.log(data);
          this.profile = data;
        }, (error) => {
          this.msg = 'Can\'t connect to server.';
          this.submsg = 'Contact us at dis@mania.com if needed'
          $('#profilemodal').modal('show');
        });
      } else {
        this.msg = 'Not Logged In';
        this.submsg = 'Log-in first';
        $('#profilemodal').modal('show');
      }
    }, (error) => {
      this.msg = 'Can\'t connect to server.';
      this.submsg = 'Contact us at dis@mania.com if needed';
      $('#profilemodal').modal('show');
    });
  }

  reqmoney() {
    this.msg = 'Your Request has been generated.';
    this.submsg = 'You will recieve money in 2-3 days.'
    $('#profilemodal').modal('show');
  }

}
