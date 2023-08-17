import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  zoom = 1;

  constructor(private file: File, private http: HttpClient) {}

  subtratZoom() {
    if (this.zoom > 0.5) {
      this.zoom -= 0.3;
    }
  }
  addZoom() {
    if (this.zoom < 2) {
      this.zoom += 0.3;
    }
  }

  onDowload() {
    this.getFileFromService(this.pdfSrc);
  }

  getFileFromService = (url: string) => {
    this.status = 'warning';
    const dirPath = this.file.dataDirectory + '/Dowload/';
    const name = 'test.pdf';

    this.getFile(url).subscribe({
      next: async (res) => {
        // Success Alert//
        this.status = 'success';
        this.icon = 'checkmark';

        // Business Flow//
        const file = await this.file.writeFile(dirPath, name, res, {
          replace: true,
        });
        //* To Review
        // .then((res) => { //   this.message = { success: res }; // }) // .catch((err) => { //   this.file //     .writeExistingFile(dirPath, name, file) //     .then((res) => { //       this.message = { success: res }; //     }) //     .catch((err) => { //       this.message = { error: err }; //     }); // });
        this.message = { success: JSON.stringify(file) };
      },
      error: (error) => {
        this.status = 'danger';
        this.icon = 'warning';
        this.message = { error: JSON.stringify(error) };
      },
    });
    setTimeout(() => {
      this.status = 'primary';
      this.icon = 'information';
    }, 3000);
  };

  getFile(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }

  /* %%%%%%%%%%%%%%%%%%%%%% MODAL ALERT %%%%%%%%%%%%%%%%%%%%%% */
  /* %%%%%%%%%%%%%%%%%%%%%% MODAL ALERT %%%%%%%%%%%%%%%%%%%%%% */
  /* %%%%%%%%%%%%%%%%%%%%%% MODAL ALERT %%%%%%%%%%%%%%%%%%%%%% */

  status: 'danger' | 'success' | 'warning' | 'primary' = 'primary';
  icon: 'checkmark' | 'warning' | 'information' = 'information';
  message: any;
  @ViewChild(IonModal) modal: IonModal;

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log('Confirm', ev.detail.data);
    }
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('text', 'confirm');
  }
}
