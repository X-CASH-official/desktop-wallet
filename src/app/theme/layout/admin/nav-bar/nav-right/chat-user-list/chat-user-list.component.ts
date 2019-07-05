import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FriendsList} from '../../../../../../fack-db/friends-list';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent implements OnInit {
  @Output() onChatCollapse = new EventEmitter();
  @Output() onChatToggle = new EventEmitter();
  public friendsList: any;

  constructor() {
    this.friendsList = FriendsList.friends;
  }

  ngOnInit() {
  }

  onChatOn(friend_id) {
    this.onChatToggle.emit(friend_id);
  }

}
