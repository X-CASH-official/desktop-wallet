import { Component, OnInit } from '@angular/core';
import {
  AdvancedLayout, Description, DescriptionStrategy, GridLayout, Image, LineLayout, PlainGalleryConfig,
  PlainGalleryStrategy
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-adv-light-box',
  templateUrl: './adv-light-box.component.html',
  styleUrls: ['./adv-light-box.component.scss']
})
export class AdvLightBoxComponent implements OnInit {
  images: Image[] = [
    new Image(0, { img: 'assets/images/light-box/l1.jpg' }),
    new Image(1, { img: 'assets/images/light-box/l5.jpg' }),
    new Image(2, { img: 'assets/images/light-box/l6.jpg' }),
    new Image(3, { img: 'assets/images/light-box/l4.jpg' }),
    new Image(4, { img: 'assets/images/light-box/l5.jpg' }),
    new Image(5, { img: 'assets/images/light-box/l6.jpg' })
  ];

  singleImage: Image[] = [this.images[0]];

  customFullDescriptionHidden: Description = {
    strategy: DescriptionStrategy.ALWAYS_HIDDEN,
    customFullDescription: 'Custom description of the current visible image'
  };

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '150px', height: '150px' }, { length: 6, wrap: true })
  };

  plainGalleryColumn: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.COLUMN,
    layout: new LineLayout({ width: '100px', height: '100px' }, { length: 6, wrap: true }, 'flex-start')
  };

  constructor() { }

  ngOnInit() {
  }

}
