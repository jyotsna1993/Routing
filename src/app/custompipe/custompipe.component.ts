import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
r:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    return this.http.get("/assets/user1.json").subscribe(v=>this.r=v)
  }

}
