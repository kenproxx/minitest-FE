import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user : any
  check: any = localStorage.getItem('token')
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
this.findById()
  }
  findById() {
    this.httpClient.get('http://localhost:8080/users/' + localStorage.getItem('id')).subscribe(
      (data: any) => {
        this.user = data
        console.log(data)
      },error => {
        console.log(error);
      })

  }

}
