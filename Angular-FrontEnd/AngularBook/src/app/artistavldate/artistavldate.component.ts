import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';
import { Router } from '@angular/router';
import { Artist } from '../artist';
import { AddDate } from '../adddate';

@Component({
  selector: 'app-artistavldate',
  templateUrl: './artistavldate.component.html',
  styleUrls: ['./artistavldate.component.css']
})
export class ArtistavldateComponent implements OnInit {
  artist:Artist=new Artist("","","",0,"","",0,"","",0,"");
  
  email:string=sessionStorage.getItem("artistemail");
 
  adddate:AddDate=new AddDate("","",0,"")
  constructor(private service:ArtistserviceService,private router :Router) { }

  ngOnInit() {
    let len=sessionStorage.getItem('artistemail');
    console.log(len);
     if(len==null){
       alert("You need to login first")
       this.router.navigate(["/Home"]);
     }
  }
message:any;
  public addArtistDate(fromdate,todate,fees)
  {
    
   this.service.AddArtistDate(fromdate,todate,fees).subscribe((data)=>{
     this.message=data;
     this.router.navigate(["\WelcomeArtist"])
   }) 
  }

}
