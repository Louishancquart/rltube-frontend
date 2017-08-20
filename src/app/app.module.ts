import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuComponent} from './head/menu/menu.component';
import {ReviewsComponent} from './body/reviews/reviews.component';
import {VideoBoxComponent} from './body/video-box/video-box.component';
import {ReviewService} from "../services/review.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdTabsModule} from '@angular/material';
import {BodyComponent} from "./body/body.component";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    VideoBoxComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdTabsModule
  ],
  providers: [
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
