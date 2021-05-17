import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import { ChatService } from './chat.service';
import { ChatMessageModel } from './model/chat.model';

@Injectable()
export class MockedChatService extends ChatService {

    constructor(userService: UserService) {
        super(userService);
  }

  addMessage(roomId: string, msg: string): Observable<boolean> {
    return super.addMessage(roomId, msg);
  }

  getRoomMessages(roomId: string): Observable<ChatMessageModel[]> {
    return super.getRoomMessages(roomId);
  }
}