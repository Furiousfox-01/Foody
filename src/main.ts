import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HomeModule } from './home/home.module';
import { DishesModule } from './dishes/dishes.module';
import { PaymentModule } from './payment/payment.module';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
