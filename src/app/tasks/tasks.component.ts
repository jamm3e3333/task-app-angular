import { Component, inject, input, output, signal, WritableSignal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  userId = input<string | undefined>();
  isNewTaskVisible = signal<boolean>(false);

  private tasksService = inject(TasksService);

  get selectedUserTasks(): Task[] | undefined {
    return this.tasksService.getUserTasks(this.userId() ?? '');
  }

  onDisplayNewTask() {
    this.isNewTaskVisible.set(true);
  }

  onHideNewTask() {
    this.isNewTaskVisible.set(false);
  }
}
