import { Component } from '@angular/core';
import { PushNotifyService } from './services/push-notify.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private pushNotifyService: PushNotifyService
  ) {}

  initializeApp() {
    this.pushNotifyService.addListeners();
    this.pushNotifyService.registerNotifications();
  }
}
