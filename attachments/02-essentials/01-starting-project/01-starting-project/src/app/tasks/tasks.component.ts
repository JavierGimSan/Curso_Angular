import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string; //El interrogante indica que no está inicializado pero que no pasa nada.
  //Código anterior: @Input({required: true}) name!: string;
}
