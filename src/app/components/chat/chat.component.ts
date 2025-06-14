import { Component } from '@angular/core';
import { ChatListComponent } from './chat-list/chat-list.component';

@Component({
    selector: 'app-chat',
    imports: [ChatListComponent],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
})
export class ChatComponent {}
