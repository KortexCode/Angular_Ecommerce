import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleSidebar = signal(false);

  toggleSidebarHandler() {
    this.toggleSidebar.update(value => !value);
  }
}
