import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-adv-task-board',
  templateUrl: './adv-task-board.component.html',
  styleUrls: [
    './adv-task-board.component.scss',
    '../../../../../../node_modules/dragula/dist/dragula.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdvTaskBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
