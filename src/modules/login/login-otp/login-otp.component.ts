import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginOtpComponentData } from '../login-interfaces';
@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss'],
})
export class LoginOtpComponent implements OnInit, OnDestroy {

  @Input() isDisplay: boolean = false;
  
  loginOtpData: LoginOtpComponentData = {
    buttonText: 'ENTER',
    visible: true,
    termsText: 'Check your Phone for OTP. Don\'t Share this OTP to anyone other than yourself',
  };

  isShow: boolean = this.isDisplay;
  countdown$!: Observable<number>;
  intervalSubscription: Subscription = new Subscription();
  

  ngOnInit():void {
    this.setupCountdown();
    this.setupIntervalSubscription();
  }

  ngOnDestroy():void {
    this.intervalSubscription.unsubscribe();
  }

  private setupCountdown():void {
    if (this.isDisplay) {
      this.countdown$ = interval(1000).pipe(
        take(60),
        map((i) => 60 - i)
      );
    }
  }

  private setupIntervalSubscription():void {
    this.intervalSubscription = interval(400).subscribe(() => {
      this.isShow = this.isDisplay;
    });
  }
}