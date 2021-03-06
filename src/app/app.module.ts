import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BuyServiceComponent } from './buy-service/buy-service.component';
import { SellServiceComponent } from './sell-service/sell-service.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { SellComponent } from './sell/sell.component';
import { OffersComponent } from './offers/offers.component';
import { OfferComponent } from './offer/offer.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'sell', component: SellComponent},
  { path: ':category/offers', component: OffersComponent},
  { path: ':category/:id', component: OfferComponent},
  { path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuyServiceComponent,
    SellServiceComponent,
    FooterComponent,
    CategoriesComponent,
    SellComponent,
    OffersComponent,
    OfferComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
