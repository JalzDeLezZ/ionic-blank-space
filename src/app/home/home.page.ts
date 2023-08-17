import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  zoom = 1;

  constructor() {}

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
    console.log("onDowload");
  }
}
