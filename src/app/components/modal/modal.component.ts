import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private domS: DomSanitizer
  ) {}
  @Input() url_iframe: SafeResourceUrl = '';

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  onBrowser = async (url = 'https://new-fuerza-web-hino-dot-clientes-dcanje.uc.r.appspot.com/#') => {
    this.url_iframe = this.domS.bypassSecurityTrustResourceUrl(url);
  };
}
