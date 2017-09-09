import {Component, EventEmitter, Input, Output} from "@angular/core";
import {YoutubePlayerService} from "../../../services/youtube-player.service";
// import {PlaylistStoreService} from "../../../services/playlist-store.service";

@Component({
  selector: 'app-videos-list',
  templateUrl: 'videos-list.component.html',
  styleUrls: ['videos-list.component.css']
})

export class VideosListComponent {
  @Input() videoList;
  // @Input() loadingInProgress;
  // @Output() videoPlaylist = new EventEmitter();
  // @Output() newSelectedVideo = new EventEmitter<string>();

  constructor(private youtubePlayer: YoutubePlayerService,
              // private playlistService: PlaylistStoreService
  ) {
  }

  play(videoID: any): void {
    // this.youtubePlayer.playVideo(video.id, video.snippet.title);
    // this.newSelectedVideo.emit(videoID);
    // console.log("new vid selected:" + videoID);
    // this.addToPlaylist(video);

    const currentVideo: HTMLIFrameElement = document.getElementById("current-video") as HTMLIFrameElement;
    currentVideo.setAttribute('src', 'https://www.youtube.com/embed/' + videoID);
  }

  // addToPlaylist(video: any): void {
  //   this.videoPlaylist.emit(video);
  // }
}
