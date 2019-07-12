import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class TaskList {
  id: string;
  task: string;
  date: string;
  status: string;
  images: any;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [
    './task-list.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class TaskListComponent implements OnInit {
  public taskObservable: Observable<TaskList>;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = 'id';
  public sortOrder = 'asc';

  public todoListMessage: string;
  public todo_list_message_error: boolean;
  public newTodoList: any;

  constructor(public httpClient: HttpClient) {
    this.newTodoList = '';
  }

  ngOnInit() {
    this.taskObservable = this.httpClient.get<TaskList>('fake-data/task-list.json');
  }

  addTodoList() {
    if (this.todoListMessage === '' || this.todoListMessage === undefined) {
      this.todo_list_message_error = true;
    } else {
      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      const html_todo = '<div class="to-do-list mb-3">' +
        '<div class="d-inline-block">' +
        '<label class="check-task custom-control custom-checkbox d-flex justify-content-center">' +
        '<input type="checkbox" class="custom-control-input" id="info_' + random + '" (change)="completeTodoList($event)">' +
        '<span class="custom-control-label">' + this.todoListMessage + '</span>' +
        '</label>' +
        '</div>' +
        '<div class="float-right"><a href="javascript:" class="delete_todolist" appTodoListRemove><i class="far fa-trash-alt"></i></a></div>' +
        '</div>';

      this.newTodoList = this.newTodoList + html_todo;
      this.todoListMessage = '';
    }
  }

  completeTodoList(e) {
    e.target.parentElement.classList.remove('done-task');
    if (e.target.checked) {
      e.target.parentElement.classList.add('done-task');
    }
  }

}
