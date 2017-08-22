import { Component } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public videoList = [];
  public loadingInProgress = false;

  handleSearchVideo(videos: Array<any>): void {
    this.videoList = videos;

    for ( const v  of this.videoList){
    console.log("video list: " + v.toString());
    }
  }
}
