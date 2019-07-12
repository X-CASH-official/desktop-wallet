import { Component, OnInit } from '@angular/core';
import '../../../../../../node_modules/tinymce/tinymce.min.js';

@Component({
  selector: 'app-ext-tinymce',
  templateUrl: './ext-tinymce.component.html',
  styleUrls: ['./ext-tinymce.component.scss']
})
export class ExtTinymceComponent implements OnInit {
  public basicContent: string;

  constructor() { }

  ngOnInit() {
    this.basicContent = '<p>Hello...</p>';
  }

}
