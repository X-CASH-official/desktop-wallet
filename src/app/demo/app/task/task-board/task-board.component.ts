import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  public isCompleteStatus = false;
  public isAssignUsers = false;
  public isRevision = false;

  constructor() { }

  ngOnInit() {
  }

}
