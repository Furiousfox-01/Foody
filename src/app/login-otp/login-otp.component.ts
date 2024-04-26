import { Component, Input, SimpleChanges } from '@angular/core';

import { Observable, interval, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrl: './login-otp.component.scss',
})
export class LoginOtpComponent {
  buvalue: string = 'ENTER';
  visible: boolean = true;
  @Input() isDisplay: boolean = false;
  isShow: boolean =false;
  intervalSubscription: Subscription | undefined;
  countdown$: Observable<number> | undefined;
  constructor(private router:Router) {}

  navi(actionInfo: { actionType: string; source: string }) {
    if (actionInfo.source === 'ENTER') {
      console.log("navigate")
  this.router.navigate(['home']);
      
    }
    return;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('isDisplay' in changes && this.isDisplay) {
      this.countdown$ = interval(1000).pipe(
        take(60),
        map((i) => 60 - i)
      );
    }
    this.intervalSubscription = interval(400).subscribe(() => {
      this.isShow = this.isDisplay;
    });
  }
  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
