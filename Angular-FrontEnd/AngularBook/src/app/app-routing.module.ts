import { HomeComponent } from './home/home.component';
import { UserregitrationComponent } from './userregitration/userregitration.component';
import { ArtistregitrationComponent } from './artistregitration/artistregitration.component';
import { WelcomeArtistComponent } from './welcomeartist/welcomeartist.component';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { TestComponent } from './test/test.component';
import { ArtistloginComponent } from './artistlogin/artistlogin.component';
import { ArtistListForUserComponent } from './artist-list-for-user/artist-list-for-user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderconfirmationComponent} from './orderconfirmation/orderconfirmation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { CategoriesComponent } from './categories/categories.component';
import { BookartistfilterComponent } from './bookartistfilter/bookartistfilter.component';
import { ArtistavldateComponent } from './artistavldate/artistavldate.component';
import { ArtistprofileComponent } from './artistprofile/artistprofile.component';
import {ArtistbookingsComponent} from './artistbookings/artistbookings.component';
import {UserBookingComponent} from './user-booking/user-booking.component';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path: 'Artist_Login',component:ArtistloginComponent},
  {path: 'User_Login',component:UserloginComponent},
  {path: 'Artist_Registration',component:ArtistregitrationComponent},
  {path: 'User_Registration',component:UserregitrationComponent},
  {path: 'WelcomeArtist',component:WelcomeArtistComponent,
  children:[  { path: '', component:ArtistprofileComponent },
              { path: 'MyAvlDate', component:ArtistavldateComponent },
               {path:'My_Profile',component:ArtistprofileComponent},
               {path:'ArtistBookings',component:ArtistbookingsComponent}

               
  ]
  },

  {path: 'WelcomeUser',component:WelcomeuserComponent,
  children:[  { path: '', component:CategoriesComponent },
         { path: 'My_Account', component:CategoriesComponent },
            {path:'Book_Artist_filter',component:BookartistfilterComponent},
            {path:'UserBookings',component:UserBookingComponent}
          
          ]
         },
  {path: 'ArtistListForUser',component:ArtistListForUserComponent},
  {path: 'Test',component:TestComponent}, 
  {path:'OrderConfirmation',component:OrderconfirmationComponent},
  {path:"Admin_Login",component:AdminloginComponent},
  {path:"WelcomeAdmin",component:WelcomeadminComponent},
  {path:"Categories",component:CategoriesComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rougtingComponants = [ArtistregitrationComponent,UserregitrationComponent,
UserloginComponent,ArtistloginComponent,WelcomeArtistComponent,WelcomeuserComponent,
ArtistListForUserComponent,TestComponent,OrderconfirmationComponent,AdminloginComponent,WelcomeadminComponent,
CategoriesComponent ];
