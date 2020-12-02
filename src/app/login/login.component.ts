import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
  constructor(private router:Router) { }

  ngOnInit() {

  }
  butt(){
localStorage.setItem('username', this.email);
localStorage.getItem('username')
//console.log(this.email)

this.router.navigate(['/navbar']);
  }
}
