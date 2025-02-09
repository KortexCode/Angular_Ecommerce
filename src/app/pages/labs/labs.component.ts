import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [NgFor, CommonModule ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
   welcome = 'Aprende Angular pa trabajar';
  /* tasks = [{title: 'Ver seven scissor'}, {title: 'Aprender Angular'}]; */
   tasks = ['Ver seven scissor', 'Aprender Angular'];
}
