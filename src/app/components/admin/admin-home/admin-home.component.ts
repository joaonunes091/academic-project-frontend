import { Component } from '@angular/core';
import { CursosComponent } from '../cursos/cursos.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CursosComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  // Track the active tab
  activeTab: string = 'cursos';  // Default to 'cursos' tab

  // Method to select a tab
  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
