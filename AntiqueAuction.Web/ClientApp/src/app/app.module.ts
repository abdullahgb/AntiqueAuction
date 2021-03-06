import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { ItemsComponent } from './routes/items/items.component';
import { LoginComponent } from './routes/login/login.component';
import { SharedModule } from './shared/shared.module';
import { DetailComponent } from './routes/detail/detail.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { BidsHistoryComponent } from './components/bids-history/bids-history.component';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/JwtInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    LoginComponent,
    BannerComponent,
    GalleryItemComponent,
    DetailComponent,
    NotFoundComponent,
    CountdownComponent,
    BidsHistoryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
