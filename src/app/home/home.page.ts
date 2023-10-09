import { Component } from '@angular/core';
import { SplashScreenService } from '../services/splash-screen.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private splashScreenService: SplashScreenService) {}

  onShowSplasScreen = () => {
    this.splashScreenService.showHideAuto();
  };
}
