import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasksList = signal([
    { task: 'Ver seven scissor 4' },
    { task: 'Aprender Angular' },
  ]);
  trackByFnTask(item: any): number {
    return item.task; // Usamos el ID único como clave
  }
  changaHandler(event: KeyboardEvent) {
    console.log(event);
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      const value = input.value;
      this.tasksList.update((currentList) => [...currentList, { task: value }]);
    }
    return;
  }
  deleteTask(index: number) {
    this.tasksList.update((currentList) => {
      return currentList.filter((_item, position) => index !== position);
    });
  }
}
