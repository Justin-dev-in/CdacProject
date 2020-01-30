import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {

  result:any;
  email:any
  constructor(private service:ArtistserviceService,private router:Router) { }

  ngOnInit() {
    let len=sessionStorage.getItem('useremail');
    console.log(len);
     if(len==null){
       alert("You need to login first")
       this.router.navigate(["/Home"]);
     }
    this.getAllBookings();

  }

    public getAllBookings()
    {
      this.email=sessionStorage.getItem("useremail")
      this.service.getBookingsU(this.email).subscribe((data)=>{
        this.result=data;
        console.log(this.result);
    })
 

}
}
