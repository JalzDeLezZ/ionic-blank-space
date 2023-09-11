import { Component, OnInit } from '@angular/core';
import { PushNotifyService } from '../services/push-notify.service';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    public pushNotifyService: PushNotifyService,
    private storageService: StorageService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.pushNotifyService.registerNotifications();
  }

  onClick() {
    this.pushNotifyService.addListeners().then(() => {
      this.pushNotifyService.getDeliveredNotifications();
    });
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
}
