import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv-modal',
  templateUrl: './adv-modal.component.html',
  styleUrls: ['./adv-modal.component.scss']
})
export class AdvModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

}
