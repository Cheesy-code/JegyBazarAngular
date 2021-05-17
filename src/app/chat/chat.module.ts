import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { UserService } from '../shared/user.service';
import { environment } from '../../environments/environment';
import { MockedChatService } from './mocked-chat.service';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ChatMessageRowComponent } from './chat-message-row/chat-message-row.component';

export const chatServiceProvideFactoryFN = (userService: UserService) => {
  return environment.production ? new ChatService(userService) : new MockedChatService(userService);
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [ChatWindowComponent, ChatMessageRowComponent],
  exports: [ChatWindowComponent]
})

export class ChatModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChatModule,
      providers: [
        {
          provide: ChatService,
          useFactory: chatServiceProvideFactoryFN,
          deps: [UserService]
        }
      ]
    };
  }
}
