import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Curso, CursosService } from '../../../services/cursos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  curso: Curso = { name: '' };

  constructor(private cursosService: CursosService,) {}

  ngOnInit() {
    this.cursosService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  addCurso(): void {
    if (this.curso.name) {
      this.cursosService.addCurso(this.curso).subscribe(
        (newItem) => {
          console.log('Item added:', newItem);
          // Optionally, reset the form
          this.curso = { name: ''};
          this.ngOnInit();
        },
        (error) => {
          console.error('Error adding curso:', error);
        }
      );
    } else {
      alert('Please provide valid curso details.');
    }
  }
  deleteCurso(id: string): void {
    this.cursosService.deleteCurso(id).subscribe({
        next: () => {
            // Remove the item from the local array
            this.cursos = this.cursos.filter(curso => curso.id !== id);
        },
        error: (err) => {
            console.error('Error deleting curso:', err);
        }
    });
  }

}