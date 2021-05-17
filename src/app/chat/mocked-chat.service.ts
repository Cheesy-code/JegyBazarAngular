import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import { ChatService } from './chat.service';
import { ChatMessageModel } from './model/chat.model';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/delay';

@Injectable()
export class MockedChatService extends ChatService {
  private rooms$ = new BehaviorSubject<BehaviorSubject<ChatMessageModel[]>[]>([]);

  constructor(userService: UserService) {
    super(userService);
  }

  addMessage(roomId: string, msg: string): Observable<boolean> {
    const rooms = this.rooms$.getValue();
    const roomMessages = rooms[roomId].getValue();

    return this.userService.getCurrentUser()
      .delay(300)
      .switchMap(
        user => {
          roomMessages.push(
            new ChatMessageModel({
              $id: null,
              'msg': msg,
              'userId': user.id,
              'userName': user.name,
              'userPictureUrl': user.profilePictureUrl
            })
          );
          rooms[roomId].next(roomMessages);
          return Observable.of(true);
        }
      );
  }

  getRoomMessages(roomId: string): Observable<ChatMessageModel[]> {
    const rooms = this.rooms$.getValue();
    if (rooms[roomId] == null) {
      //First init room
      rooms[roomId] = new BehaviorSubject<ChatMessageModel[]>([]);
      this.rooms$.next(rooms);
    }
    return rooms[roomId].asObservable();
  }
}