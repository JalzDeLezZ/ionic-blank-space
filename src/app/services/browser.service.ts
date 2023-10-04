import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { PluginListenerHandle } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  constructor() {}

  openCapacitorSite = async (url = 'http://capacitorjs.com/') => {
    await Browser.open({
      url,
      toolbarColor: '#3880ff',
      windowName: '_self',
      presentationStyle: 'popover',
    });
  };
}
