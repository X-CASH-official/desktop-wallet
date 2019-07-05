import { Component, OnInit } from '@angular/core';
import {Description, DescriptionStrategy, Image} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit {
  images: Image[] = [
    new Image(0, { img: 'assets/images/gallery-grid/img-grd-gal-1.jpg' }),
    new Image(1, { img: 'assets/images/gallery-grid/img-grd-gal-2.jpg' }),
    new Image(2, { img: 'assets/images/gallery-grid/img-grd-gal-3.jpg' }),
    new Image(3, { img: 'assets/images/gallery-grid/img-grd-gal-4.jpg' }),
    new Image(4, { img: 'assets/images/gallery-grid/img-grd-gal-5.jpg' }),
    new Image(5, { img: 'assets/images/gallery-grid/img-grd-gal-6.jpg' })
  ]

  singleImage: Image[] = [this.images[0]];

  customFullDescriptionHidden: Description = {
    strategy: DescriptionStrategy.ALWAYS_HIDDEN,
    customFullDescription: 'Custom description of the current visible image'
  };

  constructor() { }

  ngOnInit() {
  }

}
