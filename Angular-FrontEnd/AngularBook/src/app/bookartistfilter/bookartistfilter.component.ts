import { Component, OnInit } from '@angular/core';
import { AvlDate } from '../avldate';
import { ArtistserviceService } from '../artistservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookartistfilter',
  templateUrl: './bookartistfilter.component.html',
  styleUrls: ['./bookartistfilter.component.css']
})
export class BookartistfilterComponent implements OnInit {

  
  avldate:AvlDate=new AvlDate("","",0,"");
  constructor(private _service:ArtistserviceService,private router :Router) { }
  object:string;
  message:any;
  ngOnInit() {
    let len=sessionStorage.getItem('useremail');
    console.log(len);
     if(len==null){
       alert("You need to login first")
       this.router.navigate(["/Home"]);
     }
  }


  public searchNow(udate)
  {
    sessionStorage.setItem("userdate",udate);
    let resp=this._service.searchArtistByDate(this.avldate);
    resp.subscribe(data=>{
      this.message=data;
      this.router.navigate(["/ArtistListForUser"],{ state: this.message })
       console.log(this.message);

    
    });
  

}
}
