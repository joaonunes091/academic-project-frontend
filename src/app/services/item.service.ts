import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  id?: string;
  name: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  private apiUrl = 'http://localhost:5109/api/items'; // Backend API URL

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  addItem(item: Item): Observable<Item> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Item>(this.apiUrl, item, { headers });
  }

}
