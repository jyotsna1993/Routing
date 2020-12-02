import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
button(){
localStorage.setItem('username', this.email)
 localStorage.getItem('username')
this.router.navigate(['/navbar'])
}
}
