import { ApplicationRef, Component, OnInit } from '@angular/core';
import {
  NotifyResponse,
  PushNotifyService,
} from '../services/push-notify.service';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notifications: NotifyResponse[] = [];

  constructor(
    public pushNotifyService: PushNotifyService,
    private storageService: StorageService,
    private toastController: ToastController,
    private applicationRef: ApplicationRef
  ) {}

  ngOnInit() {
    this.pushNotifyService.addListeners();
    this.pushNotifyService.registerNotifications();

    this.pushNotifyService.pushListener.subscribe((notification) => {
      this.notifications.unshift(notification);
      this.applicationRef.tick(); // force refresh
    });
  }

  async ionViewWillEnter() {
    this.notifications = await this.pushNotifyService.getNotifications();
  }

  onGetNotify() {
    this.pushNotifyService.getDeliveredNotifications();
  }

  async onCheckStorage() {
    try {
      const key_storage = await this.storageService.get('mobile_token');
      console.log('🚀 ~ HomePage ~ onCheckStorage ~ key_storage:', key_storage);
      this.presentToast(key_storage);
    } catch (error) {}
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'primary',
    });

    await toast.present();
  }

  onClearNotifications() {
    this.pushNotifyService.clearNotifications();
    this.notifications = [];
  }
}
