import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { BodyComponent } from './body/body.component';
import { BcardComponent } from './bcard/bcard.component';
import { SidebarCardComponent } from './sidebar-card/sidebar-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeRoutingModule } from './home-routing.module';
@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    BodyComponent,
    BcardComponent,      SidebarCardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],  providers: [],
  exports:[NavbarComponent,SidebarCardComponent,SidebarComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
