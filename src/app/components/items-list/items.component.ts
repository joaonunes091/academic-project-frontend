import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgFor],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items: any[] = [];

  constructor(private itemsService: ItemService) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
