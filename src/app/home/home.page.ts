import { Component, OnInit } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myToken = 'TEST_TOKEN';
  status: number | null = null;
  constructor() {}

  ngOnInit() {
    console.log('🚀 ~ HomePage ~ ngOnInit ~ ngOnInit:');
  }

  onClick() {
    console.log('🚀 ~ HomePage ~ onClick ~ onClick:');
  }
}
