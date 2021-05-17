import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../shared/user.service';
import { ChatService } from './chat.service';
import { ChatMessageModel } from './model/chat.model';
import * as moment from 'moment';

export const MockedChatDatas = {
  mockedRoomId: '-Ky0HolLJBH3Q5uVHWZf',
  mockedUserId: 'W1PZbksNI5OjYSwHqdxDbh0mBHw1',
  mockedUserName: 'Sajtos Norbert',
  mockedUserPictureUrl: 'https://steamuserimages-a.akamaihd.net/ugc/856103543882853566/80486680F34236654A9684B9E9506AD485EB4FF0/'
};

@Injectable()
export class MockedChatService extends ChatService {
  private rooms$ = new BehaviorSubject<BehaviorSubject<ChatMessageModel[]>[]>([]);

  constructor(userService: UserService) {
    super(userService);
    //fill mocked messages
    const mockedMessages = [];
    for (let i = 0; i < 10; i++) {
      mockedMessages.push({
        $id: null,
        msg: `Test message: ${i}`,
        userId: MockedChatDatas.mockedUserId,
        userName: MockedChatDatas.mockedUserName,
        userPicUrl: MockedChatDatas.mockedUserPictureUrl,
        created: moment().unix()
      });
    }

    const currentRooms = this.rooms$.getValue();
    currentRooms[MockedChatDatas.mockedRoomId] = new BehaviorSubject<ChatMessageModel[]>(mockedMessages);
    this.rooms$.next(currentRooms);
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
              'userId': MockedChatDatas.mockedUserId,
              'userName': MockedChatDatas.mockedUserName,
              'userPictureUrl': MockedChatDatas.mockedUserPictureUrl,
              'created': moment().unix()
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