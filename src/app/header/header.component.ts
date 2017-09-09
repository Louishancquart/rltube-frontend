import {Component, EventEmitter, Output} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})

export class HeaderComponent {
  @Output() videosUpdated = new EventEmitter();
  videoList = [];

  handleSearchVideo(videos: Array<any>): void {
    this.videoList = videos;
    this.videosUpdated.emit(this.videoList);
    console.log("video list: " + this.videoList.length);
    // console.log("video type: " + this.videoList[0].type);
  }
}
