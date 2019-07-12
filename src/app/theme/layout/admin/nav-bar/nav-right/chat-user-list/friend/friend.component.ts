import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() friends;
  @Output() onChatOn = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public innerChatToggle(id) {
    this.onChatOn.emit();
  }

}
