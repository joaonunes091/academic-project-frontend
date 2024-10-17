import { Component } from '@angular/core';
import { Item, ItemService } from '../../services/item.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  item: Item = { name: '', quantity: 0 };

  constructor(private itemService: ItemService) { }

  addItem(): void {
    if (this.item.name && this.item.quantity > 0) {
      this.itemService.addItem(this.item).subscribe(
        (newItem) => {
          console.log('Item added:', newItem);
          // Optionally, reset the form
          this.item = { name: '', quantity: 0 };
        },
        (error) => {
          console.error('Error adding item:', error);
        }
      );
    } else {
      alert('Please provide valid item details.');
    }
  }
}

