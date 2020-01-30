import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistbookings',
  templateUrl: './artistbookings.component.html',
  styleUrls: ['./artistbookings.component.css']
})
export class ArtistbookingsComponent implements OnInit {

  result:any;
  email:any
  constructor(private service:ArtistserviceService,private router:Router ) { }

  ngOnInit() {
    let len=sessionStorage.getItem('artistemail');
    console.log(len);
     if(len==null){
       alert("You need to login first")
       this.router.navigate(["/Home"]);
     }
    this.getAllBookings();
  }

    public getAllBookings()
    {
      this.email=sessionStorage.getItem("artistemail")
      this.service.getBookings(this.email).subscribe((data)=>{
        this.result=data;
        console.log(this.result);
    })
 

}
}
