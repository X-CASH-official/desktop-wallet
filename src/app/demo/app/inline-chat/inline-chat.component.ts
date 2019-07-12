import {Component, OnInit, ViewChild} from '@angular/core';
import {FriendsList} from '../../../fack-db/friends-list';
import {PerfectScrollbarComponent} from 'ngx-perfect-scrollbar';
import {UserChat} from '../../../fack-db/user-chat';

@Component({
  selector: 'app-inline-chat',
  templateUrl: './inline-chat.component.html',
  styleUrls: ['./inline-chat.component.scss']
})
export class InlineChatComponent implements OnInit {
  public friendsList: any;
  public message: string;
  public message_error: boolean;
  public newReplay: any;
  public friendWriting: boolean;
  public chatMessage: any;
  public userChat: any;

  constructor() {
    this.friendsList = FriendsList.friends;
    this.newReplay = '';
  }

  ngOnInit() {
    this.userChat = UserChat.chat;
    this.chatMessage = findObjectByKeyValue(this.friendsList, 'id', 1);
    if (this.chatMessage) {
      const message = findObjectByKeyValue(this.userChat, 'friend_id', 1);
      if (message) {
        this.chatMessage['chat'] = message['messages'];
      }
    }
  }

  sentMsg(flag) {
    if (this.message === '' || this.message === undefined) {
      this.message_error = true;
    } else {
      if (flag === 1) {
        this.message_error = false;
      } else {
        this.message_error = false;
        const temp_replay = this.message;
        let html_send;
        html_send = '<div class="media chat-messages">' +
          '<div class="media-body chat-menu-reply">' +
          '<div class="">' +
          '<p class="chat-cont">' + this.message + '</p>' +
          '</div>' +
          '<p class="chat-time">now</p>' +
          '</div>' +
          '</div>';

        this.newReplay = this.newReplay + html_send;
        this.message = '';

        this.friendWriting = true;
        setTimeout(() => {
          this.friendWriting = false;

          let html_replay;
          html_replay = '<div class="media chat-messages">' +
            '<a class="media-left photo-table" href="javascript:">' +
            '<img class="media-object img-radius img-radius m-t-5" src="' + this.chatMessage.photo + '" alt="' + this.chatMessage.name + '">' +
            '</a>' +
            '<div class="media-body chat-menu-content">' +
            '<div class="">' +
            '<p class="chat-cont">hello superior personality you write</p>' +
            '<p class="chat-cont">' + temp_replay + '</p>' +
            '</div>' +
            '<p class="chat-time">now</p>' +
            '</div>' +
            '</div>';
          this.newReplay = this.newReplay + html_replay;
        }, 3000);
      }
    }
  }

}

function findObjectByKeyValue(array, key, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return false;
}
