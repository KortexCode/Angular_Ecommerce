import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent implements OnInit {
  tasks = [{ title: 'Ver seven scissor' }, { title: 'Aprender Angular' }];
  /* tasks = ['Ver seven scissor', 'Aprender Angular']; */

  aSignal = signal(0);
  ngOnInit(): void {}

  keyEventHandler(event: KeyboardEvent) {
    this.aSignal.set(this.aSignal() + 1);
  }
}
