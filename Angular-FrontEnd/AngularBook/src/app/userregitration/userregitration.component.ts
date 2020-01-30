import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'userregitration',
  templateUrl: './userregitration.component.html',
  styleUrls: ['./userregitration.component.css']
})
export class UserregitrationComponent implements OnInit {

  user:User=new User("","",0,"","","","");
  message:any;
  
    constructor( private service:UserserviceService,private router:Router) { }
  
    ngOnInit() {
    }
  
    public registerNow()
    {
      let x=this.service.registerUser(this.user);
      
      x.subscribe((data)=>this.message=data);
      alert(" Yayy!!!You are registered");
        this.router.navigate(["/Home"])
      
  
    }
}
