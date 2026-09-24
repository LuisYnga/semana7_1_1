import { asNativeElements, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// La misma forma de datos del Mini-LMS, ahora en un componente Angular.
interface Estudiante {
nombre: string;
creditos: number;
edad: number;
nota: number;
}
@Component({
selector: 'app-root',
imports: [CommonModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
titulo = 'Mini-LMS · Lista de estudiantes';
estudiantes: Estudiante[] = [
{ nombre: 'María Torres', creditos: 18, edad: 12, nota: 12},
{ nombre: 'Luis Pérez', creditos: 8 , edad: 40, nota: 9},
{ nombre: 'Ana Ruiz', creditos: 14, edad:30, nota:15 }
];
// Misma regla de matrícula de la Unidad 1, ahora como método del componente.
estado(creditos: number): string {
if (creditos < 1 || creditos > 24) {
return 'Créditos inválidos';
} else if (creditos >= 12) {
return 'Matriculado';
}
return 'Pendiente';
}

cuerpo(edad: number): string{
  if (edad<18){
    return "Niño";
  } else {
    return "Adulto";
  }
}
punto(nota:number): string{
  if (nota<12){
    return"Desaprovado";
  } else {
    return"Aprovado";
  }
}

}

