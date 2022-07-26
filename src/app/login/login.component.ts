import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username?: any;
  password?: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let accout = {
      "username": this.username,
      "password": this.password
    }
    console.log(accout)
    this.httpClient.post('http://localhost:8080/login', accout).subscribe(
      (data: any) => {
        this.router.navigate(['/home'])

      }, error => {
        console.log(error);
        console.log(accout)
      }
    );
  }
}
