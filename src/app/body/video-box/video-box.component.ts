import {Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {BodyComponent} from "../body.component";


@Component({
    selector: 'app-video-box',
    templateUrl: 'video-box.component.html',
    styleUrls: ['video-box.component.css']
})

export class VideoBoxComponent {

  @Input() currentVideo;
  @Input() negativeRelevancePercentage;
  @Input() controversialRelevancePercentage;
  @Input() positiveRelevancePercentage;
;

  // constructor() {}
  //
  //
  // changeLog: string[] = [];
  //
  // ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  //
  //   const log: string[] = [];
  //
  //
  //   for (const propName in changes) {
  //     const changedProp = changes[propName];
  //     const to = JSON.stringify(changedProp.currentValue);
  //
  //     if (changedProp.isFirstChange()) {
  //       log.push(`Initial value of ${propName} set to ${to}`);
  //     } else {
  //       const from = JSON.stringify(changedProp.previousValue);
  //       log.push(`${propName} changed from ${from} to ${to}`);
  //
  //       switch (propName) {
  //         case 'currentVideo': {
  //           this.currentVideo = to;
  //
  //           break;
  //         }
  //       }
  //     }
  //     this.changeLog.push(log.join(', '));
  //
  //     console.log(this.changeLog);
  //   }
  //
  // }


}
