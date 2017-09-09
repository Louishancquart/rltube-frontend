import {Component, Output} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';



  public loadingInProgress = false;

  videoList = [];

  handleSearchVideo(videos: Array<any>): void {
    this.videoList = videos;
    console.log("video list: " + this.videoList.length);
    // console.log("video type: " + this.videoList[0].type);
  }

  // public getVideoList():  void [] {
  //   return this.videoList;
  // }


}
