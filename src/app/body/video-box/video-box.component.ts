import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-video-box',
    templateUrl: 'video-box.component.html',
    styleUrls: ['video-box.component.css']
})

export class VideoBoxComponent {
  @Input() negativeRelevancePercentage;
  @Input() controversialRelevancePercentage;
  @Input() positiveRelevancePercentage;
}
