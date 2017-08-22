import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
    constructor() { }

    private timeoutDuration = 3500;

    public showNotification(message: string): void {
      const notification =  document.querySelector('.mdl-js-snackbar');
      const data = {
        message: message,
        timeout: this.timeoutDuration
      };

      notification['MaterialSnackbar'].showSnackbar(data);
    }

}
