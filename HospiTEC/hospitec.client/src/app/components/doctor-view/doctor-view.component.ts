import { Component } from '@angular/core';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrl: './doctor-view.component.css'
})
export class DoctorViewComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
