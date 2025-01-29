import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { TasksServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  constructor(@Inject(TasksServiceToken) private tasksService: TasksService) {
    // this.tasksService = new TasksService(); En lugar de instanciar el servicio nosotros, solicitar la dependencia mediante un parámetro en el constructor.
  }

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title: title, description: description});
    this.formEl()?.nativeElement.reset();
  }
}
