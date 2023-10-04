import { Component } from '@angular/core';
import { BrowserService } from '../services/browser.service';
import { PluginListenerHandle } from '@capacitor/core';
import { experience_api, fuerza_api } from 'src/assets/data/fake_res';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  apiExperience = experience_api.data;
  apiFuerza = fuerza_api.data;
  constructor(
    private browserService: BrowserService,
    private modalController: ModalController,
    private domS: DomSanitizer
  ) {}

  onModal = async () => {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        url_iframe: this.domS.bypassSecurityTrustResourceUrl(
          'http://capacitorjs.com/'
        ),
      },
      cssClass: 'my-custom-class',
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  };

  onBrowser = async (url = 'http://capacitorjs.com/') => {
    await this.browserService.openCapacitorSite(url);
  };
}
