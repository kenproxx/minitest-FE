import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  register() {
  this.obj = {
    username: this.accout.value.username,
    password: this.accout.value.password,
    confirmPassword: this.accout.value.password
  }
    this.httpClient.post("http://localhost:8080/register", this.obj).subscribe(
      (data: any) => {
        this.router.navigate(['/login'])
      }, error => {
        console.log(error);
        console.log(this.obj)
      }
    );
  }
}
