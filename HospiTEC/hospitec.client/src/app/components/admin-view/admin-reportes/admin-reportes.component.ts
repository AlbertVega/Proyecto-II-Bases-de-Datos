import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-reportes',
  templateUrl: './admin-reportes.component.html',
  styleUrls: ['./admin-reportes.component.css']
})
export class AdminReportesComponent implements OnInit {

  reportes: any[] = [];
  nuevoReporte: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
