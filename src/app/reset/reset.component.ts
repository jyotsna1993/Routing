import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  firstnm:string;
  lname:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
butt(){
  
  localStorage.setItem('Fname',this.firstnm)
  localStorage.getItem('Fname')
  localStorage.setItem('Lname',this.lname)
  localStorage.getItem('Lname')
  this.router.navigate(['/navbar'])
}
}
