import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  msg:any;
  admin=["Admin@gmail.com","12345"];
  constructor(private router :Router) { }


  ngOnInit() {
  }

  public adminNow(Email,Password)
  {
    if(Email==this.admin[0] && Password==this.admin[1])
    {
        sessionStorage.setItem("adminemail",this.admin[0])
        this.router.navigate(["/WelcomeAdmin"]);
    }
    else{

      this.msg="Enter valid credentials"
      this.router.navigate(["Admin_Login"])
    }
  }

}
