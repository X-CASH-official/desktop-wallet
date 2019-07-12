import {Component, Directive, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
// import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @ViewChild('defaultClick') defaultClick: ElementRef;

  public todoCardMessage: string;
  public todo_card_message_error: boolean;
  public newTodoCard: any;

  public todoListMessage: string;
  public todo_list_message_error: boolean;
  public newTodoList: any;

  public todoModalMessage: string;
  public todo_modal_message_error: boolean;
  public newTodoModal: any;

  constructor() {
    this.newTodoCard = '';
    this.newTodoList = '';
    this.newTodoModal = '';
  }

  ngOnInit() {
  }

  addTodoCard() {
    if (this.todoCardMessage === '' || this.todoCardMessage === undefined) {
      this.todo_card_message_error = true;
    } else {
      const html_todo = '<li>' +
        '<p>' + this.todoCardMessage + '</p>' +
        '</li>';

      this.newTodoCard = this.newTodoCard + html_todo;
      this.todoCardMessage = '';
    }
  }

  clearAllTodoCardTask() {
    const cardTodoList = document.querySelectorAll('#task-list li');
    for (let i = 0; i < cardTodoList.length; i++) {
      cardTodoList[i].remove();
    }
    this.newTodoCard = '';
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

  addTodoModal() {
    if (this.todoModalMessage === '' || this.todoModalMessage === undefined) {
      this.todo_modal_message_error = true;
    } else {
      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      const html_todo = '<div class="to-do-list mb-3">' +
        '<div class="d-inline-block">' +
        '<label class="check-task custom-control custom-checkbox d-flex justify-content-center">' +
        '<input type="checkbox" class="custom-control-input" id="info_' + random + '" (change)="completeTodoList($event)">' +
        '<span class="custom-control-label">' + this.todoModalMessage + '</span>' +
        '</label>' +
        '</div>' +
        '<div class="float-right"><a href="javascript:" class="delete_todolist" appTodoListRemove><i class="far fa-trash-alt"></i></a></div>' +
        '</div>';

      this.newTodoModal = this.newTodoModal + html_todo;
      this.todoModalMessage = '';
      const el: HTMLElement = this.defaultClick.nativeElement as HTMLElement;
      el.click();
    }
  }

}
