import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { LoginOtpComponentData } from '../login-interfaces';
import { HttpClient } from '@angular/common/http';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss'],
})
export class LoginOtpComponent implements OnInit, OnDestroy {
  @Input() isDisplay: boolean = false;
  email: string = '';
  otp: number = 0;
  constructor(private http: HttpClient, private mail: MailService) {}
  loginOtpData: LoginOtpComponentData = {
    buttonText: 'ENTER',
    visible: true,
    termsText:
      "Check your Phone for OTP. Don't Share this OTP to anyone other than yourself",
  };

  isShow: boolean = this.isDisplay;
  countdown$!: Observable<number>;
  intervalSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.setupIntervalSubscription();
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }


  private setupIntervalSubscription(): void {
    this.intervalSubscription = interval(400).subscribe(() => {
      this.isShow = this.isDisplay;
    });
  }
}
