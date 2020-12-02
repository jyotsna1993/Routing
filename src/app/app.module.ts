import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailService } from './detail.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { PercentagePipe } from './percentage.pipe';
import { InbuiltpipesComponent } from './inbuiltpipes/inbuiltpipes.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { TaxPipe } from './tax.pipe';
// import { LoginComponent } from './login/login.component';
// import { SigninComponent } from './signin/signin.component';
import { ResetComponent } from './reset/reset.component';
const routes:Routes=[
             {path:'', component:ResetComponent},
             {path:'navbar', component:NavbarComponent},
            {path:'inbuiltpipes', component:InbuiltpipesComponent},
            {path:'custompipe', component:CustompipeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    PercentagePipe,
    InbuiltpipesComponent,
    CustompipeComponent,
    TaxPipe,
    // SigninComponent,
    // SigninComponent,
    ResetComponent,
  ],
  imports: [
    BrowserModule,
  FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
