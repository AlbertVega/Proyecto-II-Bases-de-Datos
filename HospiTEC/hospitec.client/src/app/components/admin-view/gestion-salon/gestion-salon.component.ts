import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-salon',
  templateUrl: './gestion-salon.component.html',
  styleUrl: './gestion-salon.component.css'
})
export class GestionSalonComponent {
  rows = [
    { nombre: 'F2-08', capacidadPersonas: '20', capacidadComputadoras: '20', facilidades: 'Proyector, pizarra, aire acondicionado' },
    { nombre: 'F2-09', capacidadPersonas: '20', capacidadComputadoras: '20', facilidades: 'Proyector, pizarra, aire acondicionado' },
    { nombre: 'F2-10', capacidadPersonas: '20', capacidadComputadoras: '20', facilidades: 'Proyector, pizarra, aire acondicionado' },
    { nombre: 'F2-11', capacidadPersonas: '20', capacidadComputadoras: '20', facilidades: 'Proyector, pizarra, aire acondicionado' },
  ];

  editingRow: boolean[] = [];

  constructor() {
    for (let i = 0; i < this.rows.length; i++) {
      this.editingRow.push(false);
    }
  }

  addRow() {
    this.rows.push({ nombre: '', capacidadPersonas: '', capacidadComputadoras: '', facilidades: '' });
    this.editingRow.push(true);
  }

  editRow(index: number) {
    this.editingRow[index] = true;
  }

  saveRow(index: number) {
    this.editingRow[index] = false;
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
    this.editingRow.splice(index, 1);
  }

  daysOfWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  startingHours = ['07:30', '08:30', '09:30', '10:30', '11:30', '12:30', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
  endHours = ['08:20', '09:20', '10:20', '11:20', '12:20', '12:50', '13:50', '14:50', '15:50', '16:50', '17:50', '18:50', '19:50', '20:50', '21:50'];

  reservations = [
    { day: 'Lunes', startHour: '08:30', endHour: '10:20', description: 'Datos 1', professor: 'Profesor 1' },
    { day: 'Lunes', startHour: '10:30', endHour: '12:20', description: 'Datos 2', professor: 'Profesor 2' },
    { day: 'Martes', startHour: '10:30', endHour: '12:20', description: 'Datos 4', professor: 'Profesor 4' },
    { day: 'Miercoles', startHour: '08:30', endHour: '10:20', description: 'Datos 5', professor: 'Profesor 5' },
    { day: 'Jueves', startHour: '08:30', endHour: '10:20', description: 'Datos 7', professor: 'Profesor 7' },
    { day: 'Jueves', startHour: '10:30', endHour: '12:20', description: 'Datos 8', professor: 'Profesor 8' },
    { day: 'Viernes', startHour: '08:30', endHour: '10:20', description: 'Datos 9', professor: 'Profesor 9' },
    { day: 'Viernes', startHour: '12:30', endHour: '18:50', description: 'Datos 10', professor: 'Profesor 10' }
  ];

  hasReservationsForDayHour(day: string, hour: string) {
    return this.reservations.some(reservation => reservation.day === day && reservation.startHour === hour);
  }

  getReservationForDayHour(day: string, hour: string) {
    return this.reservations.filter(reservation => reservation.day === day && reservation.startHour === hour);
  }

  //check if the hour is between the start and end hour of a reservation
  hasReservationAtHour(day: string, hour: string) {
    return this.reservations.some(reservation => reservation.day === day && this.hourToMinutes(hour) >= this.hourToMinutes(reservation.startHour) && this.hourToMinutes(hour) <= this.hourToMinutes(reservation.endHour));
  }

  hourToMinutes(hour: string) {
    const parts = hour.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }

  calculateHours(startHour: string, endHour: string) {
    const start = startHour.split(':');
    const end = endHour.split(':');
    const startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
    const endMinutes = parseInt(end[0]) * 60 + parseInt(end[1]);
    const hours = (endMinutes - startMinutes) / 60;
    const roundedHours = Math.ceil(hours);
    return roundedHours;
  }

  calculateDayOfWeek(date: string) {
    const parts = date.split('/');
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    const dateObject = new Date(year, month - 1, day);
    return dateObject.getDay();
  }

  getWeeks() {
    const currentDate = new Date();
    const weeks = [];
    for (let i = 0; i < 4; i++) {
      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i * 7 - currentDate.getDay() + 1);
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i * 7 - currentDate.getDay() + 5);
      weeks.push({
        startDate: `${startDate.getDate()}/${startDate.getMonth() + 1}`,
        endDate: `${endDate.getDate()}/${endDate.getMonth() + 1}`
      });
    }
    return weeks;
  }

  //display the weeks obtained from getWeeks() method into the radio toggle buttons
  weeks = this.getWeeks();
  startdate_week1 = this.weeks[0].startDate;
  enddate_week1 = this.weeks[0].endDate;
  startdate_week2 = this.weeks[1].startDate;
  enddate_week2 = this.weeks[1].endDate;
  startdate_week3 = this.weeks[2].startDate;
  enddate_week3 = this.weeks[2].endDate;
  startdate_week4 = this.weeks[3].startDate;
  enddate_week4 = this.weeks[3].endDate;
}
