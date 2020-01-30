import { ArtistserviceService } from './artistservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule , rougtingComponants } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { UserserviceService } from './userservice.service';
import { WelcomeuserComponent } from './welcomeuser/welcomeuser.component';
import { ArtistListForUserComponent } from './artist-list-for-user/artist-list-for-user.component';
import { TestComponent } from './test/test.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { ArtistEqualValidatorDirective } from './shared/artist-equal-validator.directive';
import { UserEqualValidatorDirective } from './shared/user-equal-validator.directive';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { CategoriesComponent } from './categories/categories.component';
import { BookartistfilterComponent } from './bookartistfilter/bookartistfilter.component';
import { ArtistavldateComponent } from './artistavldate/artistavldate.component';
import { ArtistprofileComponent } from './artistprofile/artistprofile.component';
import { ArtistbookingsComponent } from './artistbookings/artistbookings.component';
import { ApplicationworkingComponent } from './applicationworking/applicationworking.component';
import { UserBookingComponent } from './user-booking/user-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    rougtingComponants,
    HomeComponent,
    WelcomeuserComponent,
    ArtistListForUserComponent,
    TestComponent,
    OrderconfirmationComponent,
    ArtistEqualValidatorDirective,
    UserEqualValidatorDirective,
    AdminloginComponent,
    WelcomeadminComponent,
    CategoriesComponent,
    BookartistfilterComponent,
    ArtistavldateComponent,
    ArtistprofileComponent,
    ArtistbookingsComponent,
    ApplicationworkingComponent,
    UserBookingComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [ArtistserviceService,UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
