import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scrolled = false;

  constructor() {
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

}
