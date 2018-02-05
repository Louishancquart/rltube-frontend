import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuComponent} from './header/menu/menu.component';
import {ReviewsComponent} from './body/reviews/reviews.component';
import {VideoBoxComponent} from './body/video-box/video-box.component';
import {ReviewService} from "../services/review.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTabsModule} from '@angular/material/tabs';
import {BodyComponent} from "./body/body.component";
import {HttpModule} from "@angular/http";
import {HeaderComponent} from "./header/header.component";
import {LogoComponent} from "./header/logo/logo.component";
import {VideosSearchComponent} from "./header/videos-search/videos-search.component";
import {YoutubeApiService} from "../services/youtube-api.service";
import {YoutubePlayerService} from "../services/youtube-player.service";
import {NotificationService} from "../services/notification.service";
import {ReactiveFormsModule} from "@angular/forms";
import {VideosListComponent} from "./body/videos-list/videos-list.component";

@NgModule({
  declarations: [
    AppComponent,
        HeaderComponent,
            LogoComponent,
            VideosSearchComponent,
            MenuComponent,
        BodyComponent,
            VideosListComponent,
            VideoBoxComponent,
            ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  providers: [
    ReviewService,

    YoutubeApiService,
    YoutubePlayerService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
