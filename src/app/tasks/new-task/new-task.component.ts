import { Component, output, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);

  userId = input<string>();

  hideNewTask = output();

  addedTitle = '';
  addedSummary = '';
  addedDueDate = '';

  onHideNewTask(): void {
    this.hideNewTask.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      id: String(new Date().getTime()),
      userId: this.userId() ?? '',
      title: this.addedTitle,
      summary: this.addedSummary,
      dueDate: this.addedDueDate,
    });

    this.hideNewTask.emit();
  }
}
