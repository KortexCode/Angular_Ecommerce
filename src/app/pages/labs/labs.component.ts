import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent implements OnInit {
  tasks = [{ title: 'Ver seven scissor' }, { title: 'Aprender Angular' }];
  formControlColor = new FormControl();
  aSignal = signal(0);

  constructor() {
    this.formControlColor.valueChanges.subscribe((value) => {
      console.log('Este es el valor', value);
    });
  }

  ngOnInit(): void {}

  keyEventHandler(event: KeyboardEvent) {
    this.aSignal.set(this.aSignal() + 1);
  }
}
