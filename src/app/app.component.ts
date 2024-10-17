import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ItemsComponent } from './components/items-list/items.component';
import { AddItemComponent } from './components/add-item/add-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemsComponent, AddItemComponent, RouterModule], // Use standalone components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academic-project-frontend';
}
