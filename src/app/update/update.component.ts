import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  // update() {
  //   this.httpClient.put('http://localhost:8080/users/' + localStorage.getItem('id'), this.user).subscribe(
  //     (data: any) => {
  //       console.log(data)
  //     }
  //   )
  // }
}
