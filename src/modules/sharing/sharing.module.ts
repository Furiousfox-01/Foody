import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarCardComponent } from './sidebar-card/sidebar-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
export const COMPONENTS = [
  NavbarComponent,
  SidebarCardComponent,
  SidebarComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class SharingModule {}
