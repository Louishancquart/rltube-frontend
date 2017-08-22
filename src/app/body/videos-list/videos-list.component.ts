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
  @Input() loadingInProgress;
  @Output() videoPlaylist = new EventEmitter();

  constructor(private youtubePlayer: YoutubePlayerService,
              // private playlistService: PlaylistStoreService
  ) {
  }

  play(video: any): void {
    this.youtubePlayer.playVideo(video.id, video.snippet.title);
    this.addToPlaylist(video);
  }

  addToPlaylist(video: any): void {
    this.videoPlaylist.emit(video);
  }
}
