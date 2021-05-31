import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import { ChatFriendModel } from '../model/chat-friend.model';

@Component({
  selector: 'app-chat-firend-list',
  templateUrl: './chat-firend-list.component.html',
  styleUrls: ['./chat-firend-list.component.css']
})
export class ChatFirendListComponent implements OnInit {
  friendList$: Observable<ChatFriendModel[]>;
  @Output() select = new EventEmitter<ChatFriendModel>();

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.friendList$ = this.chatService.getMyFriendList();
  }

  onSelectFriend(friend: ChatFriendModel) {
    this.select.emit(friend);
  }

}