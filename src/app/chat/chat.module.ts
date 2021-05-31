import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { UserService } from '../shared/user.service';
import { environment } from '../../environments/environment';
import { MockedChatService } from './mocked-chat.service';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ChatMessageRowComponent } from './chat-message-row/chat-message-row.component';
import { ChatMessageSendFormComponent } from './chat-message-send-form/chat-message-send-form.component';
import { MomentModule } from 'angular2-moment';
import { ChatComponent } from './chat/chat.component';
import { ChatFirendListComponent } from './chat-firend-list/chat-firend-list.component';
import { ChatFriendRowComponent } from './chat-friend-row/chat-friend-row.component';

export const chatServiceProvideFactoryFN = (userService: UserService) => {
  return environment.production ? new ChatService(userService) : new MockedChatService(userService);
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    MomentModule
  ],
  declarations: [
    ChatWindowComponent,
    ChatMessageRowComponent,
    ChatMessageSendFormComponent,
    ChatComponent,
    ChatFirendListComponent,
    ChatFriendRowComponent
  ],
  exports: [
    ChatComponent
  ]
})

export class ChatModule {
}
