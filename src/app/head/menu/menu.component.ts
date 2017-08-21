import {Component, EventEmitter, Output} from '@angular/core';
import {Video} from '../../../services/data';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css'],
})

export class MenuComponent {
  constructor() { }

  @Output() videoUrlUpdated = new EventEmitter<string>();

  private video: Video;

  load(vURL: string) {
    this.videoUrlUpdated.emit(vURL);
    console.log("URL:dddd " + vURL);
  }

}
