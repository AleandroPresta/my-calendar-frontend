import { Component } from '@angular/core';
import { Message } from '../../../models/message.model';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@Component({
    selector: 'app-chat-list',
    imports: [ChatMessageComponent],
    templateUrl: './chat-list.component.html',
    styleUrl: './chat-list.component.css',
})
export class ChatListComponent {
    messages: Message[] = [
        {
            id: '1',
            sender: 'MyCalendar AI',
            sender_img_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBL1nZXogJwrZF96q-5RcL7XwQ6m7hmqI_fnFGg7Y1knpa31o_NIF_WHhi8qGPA4bwt0Jm4uQvmI-fZMj-bAlMEFYoeTNDAQczAA7Jo8W90N3xkQX9NbzwHFd5NVWT0yO3Hbt_X8qfUDbUHYQWMl0m7Ix645Sbg4ukyFDA40Ug0OnOdqZtX997vk5EvildBXNBkTRLHCIirkhGi81C4PC0RxlfFRL6zw-8JCkhFyk_6H5LpIF4p7S8DtsnyRQIMIKISxZyV4sWcNl0',
            content: 'Hello, how can I assist you today?',
        },
        {
            id: '2',
            sender: 'Sophie',
            sender_img_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBDdonYKggdgPWpZ-dsYq5x4wV1RW-CRrDrOa73Ems8GdCzjkTyrjAVS9opYAbEFA-pI0L3VUpZapzjNH21Bj-unc2-xRexVfC8YtyDHIyQgy9Cumo1cLlaOUFJ5ppScuGjx1s1xAA6uvJlkOzdgH2jvOgPjAw76ilOcC9kW15PwXpGr4JtBdvdzJfQQJMF07EMaoccftT5s1_QxveBdP8AYXEnwuyA6GvOrDAlkm06EneqIE7HIlUQo-8IhQu3r1HEs1MzhLcDBRQ',
            content: 'Hi there! Can you help me draft an email to a client?',
        },
        {
            id: '3',
            sender: 'MyCalendar AI',
            sender_img_url:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBL1nZXogJwrZF96q-5RcL7XwQ6m7hmqI_fnFGg7Y1knpa31o_NIF_WHhi8qGPA4bwt0Jm4uQvmI-fZMj-bAlMEFYoeTNDAQczAA7Jo8W90N3xkQX9NbzwHFd5NVWT0yO3Hbt_X8qfUDbUHYQWMl0m7Ix645Sbg4ukyFDA40Ug0OnOdqZtX997vk5EvildBXNBkTRLHCIirkhGi81C4PC0RxlfFRL6zw-8JCkhFyk_6H5LpIF4p7S8DtsnyRQIMIKISxZyV4sWcNl0',
            content:
                "Of course! Please provide me with the necessary details, such as the client's name, the subject of the email, and any specific points you'd like to include.",
        },
    ];
}
