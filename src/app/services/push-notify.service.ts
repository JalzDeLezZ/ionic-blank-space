import { Injectable , EventEmitter} from '@angular/core';
import {
  PushNotifications,
  PushNotificationSchema,
} from '@capacitor/push-notifications';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PushNotifyService {
  public status: number | null = null;
  public mobile_token: string = 'Token not set yet!';

  public notifications: NotifyResponse[] = [];

  pushListener = new EventEmitter<NotifyResponse>();

  constructor(private storageService: StorageService) {
    this.uploadNotifications();
  }

  addListeners = async () => {
    await PushNotifications.addListener('registration', (token) => {
      console.log({ token: token.value });
      this.mobile_token = token.value;
      this.storageService.set('mobile_token', token.value);
    });

    await PushNotifications.addListener('registrationError', (err) => {
      console.error('Registration error: ', err.error);
      this.status = 0;
    });

    await PushNotifications.addListener(
      'pushNotificationReceived',
      (notification) => {
        console.log('Push notification received: ', notification);
        this.actionNotificationReceived(notification);
        this.setStatus(1, null);
      }
    );

    await PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification) => {
        console.log(
          'Push notification action performed',
          notification.actionId,
          notification.inputValue
        );
        this.setStatus(1, null);
      }
    );
  };

  registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
      this.status = 3;
    }

    if (permStatus.receive !== 'granted') {
      this.status = 0;
      throw new Error('User denied permissions!');
    }

    await PushNotifications.register();
  };

  getDeliveredNotifications = async () => {
    const notificationList =
      await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);

    notificationList.notifications.forEach((notification) => {
      this.actionNotificationReceived(notification);
    });
    this.setStatus(1, null);
  };

  /* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
  /* %%%%%%%%%%%%%%%%%%%%%%%% CONTROLLERS %%%%%%%%%%%%%%%%%%%%%%%%%% */
  /* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

  actionNotificationReceived = async (notify: PushNotificationSchema) => {
    await this.uploadNotifications();
    console.log(
      '🚀 ~ PushNotifyService ~ actionNotificationReceived= ~ notify:',
      notify
    );
    const exist = this.notifications.find((n) => n.id === notify.id);

    if (exist) return;

    const notification: NotifyResponse = {
      id: notify.id,
      data: notify.data,
      title: notify.title,
      body: notify.body,
    };

    this.notifications.unshift(notification);
    this.pushListener.emit(notify);

    this.saveNotification();
  };

  saveNotification = () => {
    this.storageService.set('notifications', this.notifications);
  };

  uploadNotifications = async () => {
    this.notifications = (await this.storageService.get('notifications')) || [];
  };

  getNotifications = async () => {
    await this.uploadNotifications();
    return [...this.notifications];
  }

  setStatus = (status_init: number | null, status_final: number | null) => {
    this.status = status_init;
    setTimeout(() => {
      this.status = status_final;
    }, 3000);
  };
}

export interface NotifyResponse {
  id?: string;
  data?: { [key: string]: string }; // Usamos un índice para permitir claves dinámicas
  title?: string;
  body?: string;
}
