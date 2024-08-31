import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css',
})
export class MensajesComponent {
  msj: String = '';
  @Input() userName: String;
  @Output() msjEvent = new EventEmitter<Message>();
  color: String;
  enviar() {
    if (this.msj != '') {
      let message: Message = {
        userName: this.userName,
        message: this.msj,
        date: new Date(),
        color: this.color,
      };
      this.msjEvent.emit(message);
      this.msj = '';
    }
  }
  ngOnInit() {
    let colors: string[] = [
      'bg-primary',
      'bg-secondary',
      'bg-success',
      'bg-danger',
      'bg-warning',
      'bg-dark',
      'bg-info',
    ];

    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}
