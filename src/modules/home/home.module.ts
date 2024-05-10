import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { BodyComponent } from './body/body.component';
import { BcardComponent } from './bcard/bcard.component';
import { SharingModule } from '../sharing/sharing.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

const homeComponents = [HomeComponent, BodyComponent, BcardComponent];

@NgModule({
  declarations: [...homeComponents, HomeComponent],
  imports: [SharedModule, HomeRoutingModule, SharingModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
