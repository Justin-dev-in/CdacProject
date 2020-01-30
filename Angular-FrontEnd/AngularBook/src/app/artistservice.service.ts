import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArtistserviceService {


  constructor(private http:HttpClient) { }



  public registerArtist(artist)
  {
      return this.http.post("http://localhost:9090/artistslist",artist);
  }

 // private router:Router;
   public loginArtist(artist)
   {

     console.log(artist);
        return this.http.post("http://localhost:9090/Alogin",artist,{responseType:'text'});
   }   
     
   public getArtistByEmailId()
   {
       var email=sessionStorage.getItem('artistemail')
        return this.http.get("http://localhost:9090//artistslist/"+email);

   }  

   public searchArtistByDate(avldate)
   {
     console.log(avldate);
    return this.http.post("http://localhost:9090//searchArtistsBydate",avldate,{responseType:'text'});
   }
   public AddArtistDate(fromdate,todate,fees)
   {
  
    
    var email=sessionStorage.getItem("artistemail");
    console.log(fromdate,todate,fees,email);
    return this.http.post("http://localhost:9090//adatelist"+"/"+fromdate+"/"+todate+"/"+fees+"/"+email,{responseType:'text'});
   }

   public orderArtist(artistName,artistfees,artistAddress,artistEmailID,venue,timeslot,bdate){

     console.log(artistfees,artistAddress,artistEmailID,venue,timeslot,bdate);
     var uemail=sessionStorage.getItem('useremail')
     return this.http.get("http://localhost:9090//orderslist/"+bdate+"/"+timeslot+"/"+artistfees+"/"
     +venue+"/"+artistEmailID+"/"+uemail);
     


   }

   public artistByCategory(category){
     console.log("categoooooooooooory"+category);
     return this.http.get("http://localhost:9090/artistscategory/"+category)
   }


   public getBookings(email){
     console.log(email);

     return this.http.get("http://localhost:9090//orderslistbyaemail/"+email)
   }

   public getBookingsU(email){
    console.log(email);

    return this.http.get("http://localhost:9090//Userorderslistbyuemail/"+email)
  }


   public getAllArtists(){
     return this.http.get("http://localhost:9090/artistslist")
   }
   public getAllOrders(){
     return this.http.get("http://localhost:9090/orderslist")
   }
}
