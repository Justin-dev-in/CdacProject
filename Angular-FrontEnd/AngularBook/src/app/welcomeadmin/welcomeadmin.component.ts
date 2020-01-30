import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ArtistserviceService } from '../artistservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomeadmin',
  templateUrl: './welcomeadmin.component.html',
  styleUrls: ['./welcomeadmin.component.css']
})
export class WelcomeadminComponent implements OnInit {
 
  oresult:any;
  aresult:any;
  result:any;
  constructor(private service:UserserviceService,private _service:ArtistserviceService,private router:Router) { }

  ngOnInit() {

    let len=sessionStorage.getItem("adminemail");
    if(len==null){
      alert("You need to login first")
      this.router.navigate(["\Home"]);

    }
    this.getAllUsersNow();
    this.getAllArtistsNow();
    this.getAllOrdersNow();
  }


  getAllUsersNow(){
    this.service.getAllUsers().subscribe(data=>{
      this.result=data;
      console.log(this.result);
  });


}
  getAllArtistsNow(){
    this._service.getAllArtists().subscribe(
     data=>{this.aresult=data;
            console.log(this.aresult);
     } 
    );
  }

  getAllOrdersNow(){
    this._service.getAllOrders().subscribe(data=>{
      this.oresult=data;
      console.log(this.oresult);
    })
  }


  public logOutNow(){

    sessionStorage.clear();
    alert("Logout Successful");
    this.router.navigate(["\Home"]);

  }
}