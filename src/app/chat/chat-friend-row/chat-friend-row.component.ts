import { Component, HostBinding, Input } from '@angular/core';
import { ChatFriendModel } from '../model/chat-friend.model';

@Component({
  selector: 'app-chat-friend-row',
  templateUrl: './chat-friend-row.component.html',
  styleUrls: ['./chat-friend-row.component.css']
})
export class ChatFriendRowComponent {
  @Input() friend: ChatFriendModel;
  @HostBinding('class.clearFix') classClearFix = true;
}
