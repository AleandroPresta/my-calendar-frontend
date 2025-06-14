import { Component, Input } from '@angular/core';
import { Message } from '../../../../../models/message.model';

@Component({
    selector: 'app-system-message',
    imports: [],
    templateUrl: './system-message.component.html',
    styleUrl: './system-message.component.css',
})
export class SystemMessageComponent {
    @Input() message: Message = {
        id: '',
        sender: '',
        sender_img_url: '',
        content: '',
    };
}
