import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNewUser: boolean = true;
  isRegUser: boolean = false;
  scrolled = false;
  name: string;
  email: string;
  password: string;
  paytm: string;
  LoggedIn: boolean = false;
  msg: string = '';

  constructor(private http: HttpClient) {
    window.addEventListener('scroll', () => {
      let nav = document.getElementById('nav');
      if ((document.documentElement.scrollTop || document.body.scrollTop) > 61.6) {
              // nav.classList.remove('hidden');
              this.scrolled = true;
      } else {
              this.scrolled = false;
              // nav.classList.add('hidden');
              // nav.classList.remove('nav-colored');
      }
  });
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/isLoggedIn', {
      withCredentials: true
    }).subscribe((data: any) => {
        console.log(data);
        if(data.LoggedIn == true) {
          this.LoggedIn = true;
        } else {
          this.LoggedIn = false;
        }
      }, (error) => {
        console.log(error);
      });
  }

  toggleUser() {
    this.isNewUser = !this.isNewUser;
    this.isRegUser = !this.isRegUser;
  }

  log_in() {
    if(this.isNewUser) {
      this.http.post('http://localhost:3000/sign-up', JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password,
        paytm: this.paytm
      }), {
        withCredentials: true
      }).subscribe((data: any) => {
        console.log(data);
        if(data.LoggedIn == true) {
          this.LoggedIn = true;
          this.msg = 'Successfuly Logged-In';
          $('#status').modal('show');
        } else {
          this.msg = 'Error while sign-up';
          $('#status').modal('show');
          this.LoggedIn = false;
        }
      }, (error) => {
        this.msg = 'Can\'t Connect to Server';
        $('#status').modal('show');
        console.log(error);
      });
    } else {
      this.http.post('http://localhost:3000/sign-in', JSON.stringify({
        email: this.email,
        password: this.password
      }),{
      withCredentials: true
 }).subscribe((data: any) => {
        console.log(data);
        if(data.LoggedIn == true) {
          this.LoggedIn = true;
          this.msg = 'Successfuly Logged In';
          $('#status').modal('show');
        } else {
          this.msg = 'Error while sig-in';
          $('#status').modal('show');
          this.LoggedIn = false;
        }
      }, (error) => {
        this.msg = 'Can\'t Connect to Server';
        $('#status').modal('show');
        console.log(error);
      });
    }
  }

  logout() {
    this.http.get("http://localhost:3000/logout", {
      withCredentials: true
    }).subscribe((data: any) => {
      this.LoggedIn = data.LoggedIn;
      console.log(this.LoggedIn)
      if  (this.LoggedIn) {
        this.msg = 'Error while Logging Out';
      } else {
        this.msg = 'Successfuly Logged Out';
      }
      $('#status').modal('show');
    }, (error) => {
        this.msg = 'Can\'t Connect to Server';
        $('#status').modal('show');
        console.log(error);
    });
  }

}
