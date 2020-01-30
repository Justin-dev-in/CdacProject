import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../artistservice.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  artist:Artist=new Artist("","","",0,"","",0,"","",0,"");
  
  result:any;
  constructor(private service:ArtistserviceService) { }

  ngOnInit() {
  }

  public showByCategory(category){
    
    console.log(category)
    this.service.artistByCategory(category).subscribe((data)=>{this.result=data
     // this.message=data;
     console.log(this.result)

  })

}

}
