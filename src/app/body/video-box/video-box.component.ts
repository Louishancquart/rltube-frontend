import {Component, Input, OnInit} from "@angular/core";
import {ReviewService} from "../../../services/review.service";

@Component({
    selector: 'app-video-box',
    templateUrl: 'video-box.component.html',
    providers: [ ReviewService],
    styleUrls: ['video-box.component.css']
})

export class VideoBoxComponent {
  @Input() reviewService;

}
