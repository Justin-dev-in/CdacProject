import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { AddDate } from '../adddate';
import { ArtistserviceService } from '../artistservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistprofile',
  templateUrl: './artistprofile.component.html',
  styleUrls: ['./artistprofile.component.css']
})
export class ArtistprofileComponent implements OnInit {


  ngOnInit() {
    let len=sessionStorage.getItem('artistemail');
    console.log(len);
     if(len==null){
       alert("You need to login first")
       this.router.navigate(["/Home"]);
     }
    this.getArtistByIdNow();
  }


  
  artist:Artist=new Artist("","","",0,"","",0,"","",0,"");
  
  email:string=sessionStorage.getItem("artistemail");
 
  adddate:AddDate=new AddDate("","",0,"");
 constructor(private service:ArtistserviceService,private router :Router) { }
  message:any;
  public getArtistByIdNow()
  {
      this.service.getArtistByEmailId()
      .subscribe((data)=>{
        this.artist=data;
 

    //    console.log(this.artists);
      console.log(this.artist);
  });
  

}
}