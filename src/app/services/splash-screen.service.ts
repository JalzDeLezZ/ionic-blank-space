import { Injectable } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Injectable({
  providedIn: 'root',
})
export class SplashScreenService {
  constructor() {}

  // Hide the splash (you should do this on app launch)
  async hide() {
    await SplashScreen.hide();
  }

  // Show the splash for an indefinite amount of time:
  async show() {
    await SplashScreen.show({
      autoHide: false,
    });
  }

  // Show the splash for two seconds and then automatically hide it:
  async showHideAuto() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
}
