import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  isUserSelected = input.required<boolean>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
