import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import TaskModel from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasksList = signal<TaskModel[]>([
    {
      id: Date.now().toString(),
      title: 'Ver seven scissor 4',
      completed: false,
    },
    { id: Date.now().toString(), title: 'Aprender Angular', completed: false },
  ]);
  trackByFnTask(item: any): number {
    return item.task; // Usamos el ID único como clave
  }
  changaHandler(event: KeyboardEvent) {
    console.log(event);
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      const value = input.value;
      this.addTask(value);
    }
    return;
  }
  //Método para agregar tareas
  addTask(value: string) {
    const newTask = {
      id: Date.now().toString(),
      title: value,
      completed: false,
    };
    this.tasksList.update((currentList) => [...currentList, newTask]);
  }
  //Actualizar las tareas
  updateTask(index: number) {
    console.log('actualizando');
    this.tasksList.update((currentList) => {
      const newTaskList = currentList.map((task, taskIndex) => {
        if (index === taskIndex) {
          task.completed = !task.completed;
        }
        return task;
      });
      console.log(newTaskList);
      return newTaskList;
    });
  }
  //Método para borrar tareas
  deleteTask(index: number) {
    this.tasksList.update((currentList) => {
      return currentList.filter((_item, position) => index !== position);
    });
  }
}
