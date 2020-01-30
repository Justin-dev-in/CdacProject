import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistserviceService } from '../artistservice.service';

@Component({
  selector: 'app-orderconfirmation',
  templateUrl: './orderconfirmation.component.html',
  styleUrls: ['./orderconfirmation.component.css']
})
export class OrderconfirmationComponent implements OnInit {

  result:any;
  udate:any
  message:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private service:ArtistserviceService)
 { this.message=this.router.getCurrentNavigation().extras.state ;
 }
  ngOnInit() {

    this.getArtistNow();
  }

  public getArtistNow()
  {
    this.result=this.message;
    console.log(this.result);

    this.udate=sessionStorage.getItem("userdate");
   console.log(this.udate);
  }

    public orderNow(artistName,artistfees,artistAddress,artistEmailID,venue,timeslot,udate){

    //  console.log("sdkjfgbjksd"+artistName,artistfees,artistAddress,artistEmailID,venue,timeslot,udate)
      let resp=this.service.orderArtist(artistName,artistfees,artistAddress,artistEmailID,venue,timeslot,udate);
      resp.subscribe(data=>{
        this.message=data;
      //  console.log(this.message);
       //let msg=JSON.stringify(this.message);
      if(this.message==-1){
       alert("Sorry artist not  available on "+udate);
       this.router.navigate(["\WelcomeUser"]);
      }
      else{
        alert(" Artist booked for "+udate);
        this.router.navigate(["\WelcomeUser"]);
      }

    });
    }
  }


