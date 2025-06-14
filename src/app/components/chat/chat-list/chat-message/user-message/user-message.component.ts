import { Component, Input } from '@angular/core';
import { Message } from '../../../../../models/message.model';

@Component({
    selector: 'app-user-message',
    imports: [],
    templateUrl: './user-message.component.html',
    styleUrl: './user-message.component.css',
})
export class UserMessageComponent {
    @Input() message: Message = {
        id: '',
        sender: '',
        sender_img_url: '',
        content: '',
    };
}
