import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import TaskModel from '../../models/task.model';
import { Filters } from '../../models/filters.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  filters = Filters;
  tasksList = signal<TaskModel[]>([
    {
      id: Date.now().toString() + Math.random().toString(36).substring(2),
      title: 'Ver seven scissor 4',
      completed: false,
    },
    {
      id: Date.now().toString() + Math.random().toString(36).substring(2),
      title: 'Aprender Angular',
      completed: false,
    },
  ]);
  newTaskControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  /* Validators.pattern('^\\S.*\\S$|^\\S$') */
  filterMode = signal<Filters>(this.filters.all);
  taskByFilter = computed(() => {
    console.log('comutado');
    const mode = this.filterMode();
    const task = this.tasksList();
    if (mode === this.filters.completed)
      return task.filter((item) => item.completed);
    if (mode === this.filters.pending)
      return task.filter((item) => !item.completed);
    return task;
  });

  constructor() {}

  trackByFnTask(item: any): number {
    return item.task; // Usamos el ID único como clave
  }
  changaHandler() {
    if (this.newTaskControl.valid) {
      const value = this.newTaskControl.value.trim();
      if (value !== '') {
        this.addTask(value);
      }
    }
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
  updateTask(id: string) {
    console.log('actualizando');
    this.tasksList.update((currentList) => {
      const newTaskList = currentList.map((task) => {
        if (task.id === id) {
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

  //Modo de editar una tarea
  editingMode(index: number) {
    this.tasksList.update((currentList) => {
      //Con el index obtenemos la tarea a editar
      const editedTask = currentList[index];
      //Si la tarea está completada no la edita
      if (editedTask.completed === true) return currentList;
      //Desactiva las tareas en modo edición
      if (editedTask.editing === true) {
        editedTask.editing = false;
        return currentList;
      }
      //Modificamos su propiedad editing
      editedTask.editing = true; //editedTask tiene referencia en memoria
      //Devolvemos la lista actual con el objeto modificado.
      return currentList;
    });
  }

  changeFilter(filter: Filters) {
    console.log('filtro cambiado a', filter);
    this.filterMode.set(filter);
  }
}
