import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-body',
  templateUrl: './patient-body.component.html',
  styleUrl: './patient-body.component.css'
})
export class PatientBodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
