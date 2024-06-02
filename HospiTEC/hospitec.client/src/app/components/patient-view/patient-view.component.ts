import { Component } from '@angular/core';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrl: './patient-view.component.css'
})
export class PatientViewComponent {


  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
