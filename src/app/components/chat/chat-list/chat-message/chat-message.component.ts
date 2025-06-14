import { Component, Input } from '@angular/core';
import { Message } from '../../../../models/message.model';
import { UserMessageComponent } from './user-message/user-message.component';
import { SystemMessageComponent } from './system-message/system-message.component';

@Component({
    selector: 'app-chat-message',
    imports: [UserMessageComponent, SystemMessageComponent],
    templateUrl: './chat-message.component.html',
    styleUrl: './chat-message.component.css',
})
export class ChatMessageComponent {
    @Input() message: Message = {
        id: '',
        sender: '',
        sender_img_url: '',
        content: '',
    };
}
