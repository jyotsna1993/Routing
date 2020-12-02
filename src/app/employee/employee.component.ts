import { Component, OnInit } from '@angular/core';
import { DetailService } from './../detail.service';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private detailService:DetailService, private http : HttpClient ) { }
a:any;
c:any;
// e:any;
  ngOnInit() {
    this.a=this.detailService.data;
    this.detailService.b().subscribe(d=> this.c =d);
    // return this.http.get("/assets/user.json").subscribe(x=> this.e =x);
  }

}
