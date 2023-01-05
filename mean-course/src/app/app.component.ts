import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMembers();
    this.getCountry();
  }

  getMembers() {
    this.http.get('http://localhost:8080/api/employees').subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getCountry() {
    this.http.get('http://localhost:8080/info/country').subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
