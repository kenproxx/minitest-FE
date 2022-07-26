import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   accout : FormGroup = new FormGroup(
    {
      username: new FormControl(),
      password: new FormControl()
    }
  )
obj: any
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
this.obj = {
  username: this.accout.value.username,
  password: this.accout.value.password
}
    this.httpClient.post('http://localhost:8080/login', this.obj).subscribe(

      (data: any) => {
        console.log(data  )
        this.router.navigate(['/home'])

      }, error => {
        console.log(error);
        console.log(this.obj)
      }
    );
  }
}
