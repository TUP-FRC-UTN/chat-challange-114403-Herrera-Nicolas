import { Component, Pipe } from '@angular/core';
import { MensajesComponent } from '../mensajes/mensajes.component';
import { Message } from '../../models/Message';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajesComponent, DatePipe, CommonModule, FormsModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css',
})
export class SalaComponent {
  addUser() {
    if (this.newUser != '') {
      this.users.push(this.newUser);
      this.newUser = '';
    }
  }
  messages: Message[] = [];
  users: string[] = ['Pepe', 'Maria'];
  newUser: string;
  receiveMsj($event: Message) {
    console.log($event);
    this.messages.push($event);
  }
}
