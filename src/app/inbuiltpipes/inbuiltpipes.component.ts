import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inbuiltpipes',
  templateUrl: './inbuiltpipes.component.html',
  styleUrls: ['./inbuiltpipes.component.css']
})
export class InbuiltpipesComponent implements OnInit {
e:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    return this.http.get("/assets/user.json").subscribe(h=> this.e =h)
  }

}
