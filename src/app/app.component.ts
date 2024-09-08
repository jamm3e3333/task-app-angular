import { Component } from '@angular/core';
import { dummyUsers } from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = dummyUsers;
  selectedUserId?: string;

  get selectedUserName(): string | undefined {
    return this.users.find(user => user.id === this.selectedUserId)?.name;
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  }
}
