import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeLink="emp";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotoMenuItem(selMenuItem){
      this.activeLink =selMenuItem;
      this.router.navigate([selMenuItem]);
  }


}
