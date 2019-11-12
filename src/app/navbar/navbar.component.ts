import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNewUser: boolean = false;
  isRegUser: boolean = true;
  scrolled = false;
  name: string;
  email: string;
  password: string;
  paytm: string;
  LoggedIn: boolean = false;
  msg: string = '';
  forgetpass = 0;
  otp: any;

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

  toggleUser(mode) {
    if (mode == 1) {
      this.isRegUser = true;
      this.isNewUser = false;
    } else {
      this.isRegUser = false;
      this.isNewUser = true;
    }
    this.forgetpass = 0;
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
        if(data.err) {
          this.msg = 'Same email or mobile number is already registered';
          $('#status').modal('show');
        } else {
          if(data.LoggedIn == true) {
            this.LoggedIn = true;
            this.msg = 'Successfuly Logged-In';
            $('#status').modal('show');
          } else if (data.LoggedIn === 'small username') {
            this.msg = 'Username should be atleast 4 characters Long';
            $('#status').modal('show');
            this.LoggedIn = false;
          } else if (data.LoggedIn === 'small password') {
            this.msg = 'Password should be atleast 8 characters Long';
            $('#status').modal('show');
            this.LoggedIn = false;
          } else if (data.LoggedIn === 'invalid mobile number') {
            this.msg = 'Mobile number should have 10 digits whithout country code';
            $('#status').modal('show');
            this.LoggedIn = false;
          } else if (data.LoggedIn === 'inavlid email') {
            this.msg = 'Invalid email';
            $('#status').modal('show');
            this.LoggedIn = false;
          } else{
            this.msg = 'Error while sign-up';
            $('#status').modal('show');
            this.LoggedIn = false;
          }
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
        if (data.LoggedIn === true) {
          this.LoggedIn = true;
          this.msg = 'Successfuly Logged In';
          $('#status').modal('show');
        } else if(data.LoggedIn === 'incomplete form') {
          this.msg = 'Please fill all details';
          $('#status').modal('show');
        } else {
          this.msg = 'Email or password is incorrect';
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

  requestpass() {
    this.forgetpass = 2;
    this.http.post('http://localhost:3000/reset', JSON.stringify({
      email: this.email
    }), {
      withCredentials: true
    }).subscribe((data: any) => {
      console.log(data);
    }, (err) => {
      this.msg = 'Cannot connect to server.';
      $('#status').modal('show');
    })
  }

  newp() {
    this.http.post('http://localhost:3000/newpass', JSON.stringify({
      otp: this.otp,
      password: this.password
    }),{
      withCredentials: true
    }).subscribe((data: any) => {
      console.log(data);
      if(data.status === 'Password Changed') {
        this.msg = 'Password Changed.'
        $('#status').modal('show');
        this.forgetpass = 0;
      } else if (data.status === 'Wrong or expired otp') {
        this.msg = 'Invalid or Expired or Used OTP.';
        $('#status').modal('show');
      } else if (data.status === 'Error') {
        this.msg = 'Some Error Occured';
        $('#status').modal('show');
      } else if (data.status === 'Password should have atleast 8 characters') {
        this.msg = 'Password should have atleast 8 characters.'
        $('#status').modal('show');
      }
    }, (err) => {
      this.msg = 'Cannot connect to server.';
      $('#status').modal('show');
    })
  }

  changemodal() {
    $('#status').modal('hide');
    if (this.forgetpass===2)
    $('#myModal').modal('show');
  }
}
