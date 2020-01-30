import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import  {User } from '../user'
@Component({
  selector: 'userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user:User=new User("","",0,"","","","");
  constructor(private _service:UserserviceService,private router :Router) { }

  message:any;
  ngOnInit() {
  }

  msg: string = null;
  public loginNow()
  {
    
    let resp=this._service.loginUser(this.user);
    resp.subscribe(data=>{
      this.message=data;
      console.log(data);
     sessionStorage.setItem("useremail",data)
      if(this.message==="login failed")
      {
        
       this.msg="Enter Valid Username And Password";
      }
      else{
        this.router.navigate(["/WelcomeUser"])
      }
    });
  }
}
