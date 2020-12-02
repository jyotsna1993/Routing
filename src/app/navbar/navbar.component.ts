import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//  email:string;
 firstnm:string;
 lname:string;
  constructor() { }

  ngOnInit() {
     this.firstnm = localStorage.getItem('Fname')
     this.lname=localStorage.getItem('Lname')
  }
  


}
