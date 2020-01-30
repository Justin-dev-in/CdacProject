import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myObj =[{"id":1,"fromDate":"2020-01-22T18:30:00.000+0000","toDate":"2020-02-25T18:30:00.000+0000","artistfees":21000.0,"artist":{"artistEmailID":"rahul@gmail.com","artistName":"Rahul","artistPhoneNumber":123456,"artistGenre":"Comedian","artistCertification":"Yes","artistExperience":"1 To 5 Year","artistAddress":"Pune","artistPassword":"12345","artistDob":"2000-01-24","prefWorkHours":"Evening","artistPicture":"C:\\fakepath\\download.jpg"}}]


}
