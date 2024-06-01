import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-body',
  templateUrl: './doctor-body.component.html',
  styleUrl: './doctor-body.component.css'
})
export class DoctorBodyComponent {

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
