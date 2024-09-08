import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { dummyUsers } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
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
