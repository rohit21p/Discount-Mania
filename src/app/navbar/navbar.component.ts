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
      })).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.http.post('http://localhost:3000/sign-in', JSON.stringify({
        email: this.email,
        password: this.password
      })).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
