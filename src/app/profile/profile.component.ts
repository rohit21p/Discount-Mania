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
    this.http.get('http://ec2-13-233-98-246.ap-south-1.compute.amazonaws.com:4000/isLoggedIn', {
      withCredentials: true
    }).subscribe((is: any) => {
      if (is.LoggedIn) {
        this.http.post("http://ec2-13-233-98-246.ap-south-1.compute.amazonaws.com:4000/profile", JSON.stringify({
        }), {
          withCredentials: true
        }).subscribe((data: any) => {
          console.log(data);
          this.profile = data;
          this.profile.pposts.forEach(element => {
            this.profile.sold = (this.profile.sold || 0) + element.sold;
            this.profile.balance = (this.profile.balance || 0) + element.price * element.sold;
          });
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
    this.http.get('http://ec2-13-233-98-246.ap-south-1.compute.amazonaws.com:4000/releasefunds', {
      withCredentials: true
    }).subscribe((data: any) => {
      if (data.status === 'Request generated') {
        this.msg = 'Your Request has been generated.';
        this.submsg = 'You will recieve money in 2-3 working days.';
        $('#profilemodal').modal('show');
      } else if (data.status === 'err') {
        this.msg = 'Your Request is already pending';
        this.submsg = 'Contact us at dis@mania.com if needed';
        $('#profilemodal').modal('show');
      } else if (data.status === 'Login first') {
        this.msg = 'Not Logged In';
        this.submsg = 'Log-in again.';
        $('#profilemodal').modal('show');
      }
    }, (err) => {
      this.msg = 'Can\'t connect to server.';
      this.submsg = 'Contact us at dis@mania.com if needed';
      $('#profilemodal').modal('show');
    });
  }

}
