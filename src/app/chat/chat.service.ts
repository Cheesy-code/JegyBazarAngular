import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import { ChatMessageModel } from './model/chat.model';

@Injectable()
export class ChatService {

  constructor(protected userService: UserService) { }

  addMessage(roomId: string, msg: string): Observable<boolean> {
    return null;
  }

  getRoomMessages(roomId: string): Observable<ChatMessageModel[]> {
    return null;
  }
}
