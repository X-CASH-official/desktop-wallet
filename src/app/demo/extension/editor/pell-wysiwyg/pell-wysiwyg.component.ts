import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-pell-wysiwyg',
  templateUrl: './pell-wysiwyg.component.html',
  styleUrls: [
    './pell-wysiwyg.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PellWysiwygComponent implements OnInit {
  editorContent = 'OK';
  constructor() { }

  ngOnInit() {
  }

  onInput(e) {
  }

}
